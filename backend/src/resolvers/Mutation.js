const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { hasPermission } = require('../utils');

const Mutation = {
    async signup(parent, args, ctx, info) {
        // lowercase their email
        args.email = args.email.toLowerCase();
        // hash their password
        const password = await bcrypt.hash(args.password, 10);
        // create the user in the database
        const user = await ctx.db.mutation.createUser({
            data: {
                ...args,
                password: password,
                permissions: { set: ['USER'] }
            }
        }, info);
        // create JWT 
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        // setting cookie on response
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24
        });

        return user;
    },
    signout(parent, args, ctx, info) {
        // clearing token cookie 
        ctx.response.clearCookie('token');
        // returning info
        return { message: '👋' };
    },
    async signin(parent, { email, password }, ctx, info) {
        // check if there is user with email
        const user = await ctx.db.query.user({ where: { email: email } });
        if (!user) {
            throw new Error(`Invalid email`)
        }
        // check if password is correct
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new Error('Invalid password');
        }
        // generate the jwt token
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        // set the cookie with the token
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365,
        });
        // return the user
        return user;
    },
    async createPost(parent, args, ctx, info) {

        const argsCopy = { ...args };
        delete argsCopy.tags;
        delete argsCopy.images;
        delete argsCopy.largeImages;

        // TODO: Check if they are logged in
        if (!ctx.request.userId) {
            throw new Error('Must be logged in!')
        }

        const post = await ctx.db.mutation.createPost({
            data: {
                // This is how to create relationship between post with a userId
                user: {
                    connect: {
                        id: ctx.request.userId
                    }
                },
                images: { set: [...args.images] },
                largeImages: { set: [...args.images] },
                ...argsCopy,
            }
        }, info);

        const querytags = await args.tags.forEach(async tag => {
            const where = { hash: tag };
            let check = await ctx.db.query.tag({ where }, `{ id hash post { id } }`);
            if (check === null) {
                const create = await ctx.db.mutation.createTag({
                    data: {
                        hash: tag,
                        post: {
                            connect: {
                                id: post.id
                            }
                        }
                    }, info
                });
            } else {
                let update = await ctx.db.mutation.updateTag({
                    data: {
                        post: {
                            connect: {
                                id: post.id
                            }
                        }
                    },
                    where: {
                        id: check.id
                    },
                    info
                });
            }

        }
        )
        return post;
    },
    async updatePost(parent, args, ctx, info) {
        if (!ctx.request.userId) {
            throw new Error('Must be logged in!')
        }

        // Take a copy of the updates
        const updates = { ...args };
        //remove the ID from the updates
        delete updates.id;

        // run the update method
        const update = ctx.db.mutation.updatePost({
            data: updates,
            where: {
                id: args.id
            },
        }, info
        );
        return update;

    },
    async deletePost(parent, args, ctx, info) {
        if (!ctx.request.userId) {
            throw new Error('Woah There!')
        }
        const where = { id: args.id };
        // 1. find the post
        const post = await ctx.db.query.post({ where }, `{ id title user { id } }`);
        // 2. Check if they own that post, or have the permissions
        const ownsPost = post.user.id === ctx.request.userId;
        const hasPermissions = ctx.request.user.permissions.some(permission => ['ADMIN', 'POSTDELETE'].includes(permission))
        // TODO
        if (!ownsPost && !hasPermissions) {
            throw new Error("NOT IN MY HOUSE")
        }
        // 3. Delete it
        return ctx.db.mutation.deletePost({ where }, info);
    },
    async requestReset(parent, args, ctx, info) {
        // check user
        const user = await ctx.db.query.user({ where: { email: args.email } });
        if (!user) {
            throw new Error('No user found for email')
        }
        // set tkn and expiry on user
        const resetToken = (await promisify(randomBytes)(20)).toString('hex');
        const resetTokenExpiry = Date.now() + 3600000; // 1 hr
        const res = await ctx.db.mutation.updateUser({
            where: { email: args.email },
            data: { resetToken, resetTokenExpiry }
        });
        // email them reset token
        const mailRes = await transport.sendMail({
            from: 'info@kevinpena.io',
            to: user.email,
            subject: 'Your Password Reset Token',
            html: makeNiceEmail(`Your Password Reset Token is here!
            \n\n
            <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">Click Here To Reset!</a>`),
        });
        return { message: '✈️' };
    },
    async resetPassword(parent, args, ctx, info) {
        // check if they match
        if (args.password !== args.confirmPassword) {
            throw new Error("Passwords don't match");
        }
        // check if tkn is legit

        // check if it's expired
        const [user] = await ctx.db.query.users({
            where: {
                resetToken: args.resetToken,
                resetTokenExpiry_gte: Date.now() - 3600000
            }
        });
        if (!user) {
            throw new Error('Token is invalid')
        }
        // hash new password
        const password = await bcrypt.hash(args.password, 10);
        // save new password to user and remoe all resetToken fields
        const updatedUser = await ctx.db.mutation.updateUser({
            where: { email: user.email },
            data: {
                password: password,
                resetToken: null,
                resetTokenExpiry: null
            }
        });
        // generate & set jwt
        const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365
        });
        // return user
        return updatedUser;
    },
    async updatePermissions(parent, args, ctx, info) {
        // check if they are logged in
        if (!ctx.request.userId) {
            throw new Error('Must be logged in!')
        }
        // query the user
        const currentUser = await ctx.db.query.user({
            where: {
                id: ctx.request.userId,
            }
        }, info);
        // check if they have permissions
        hasPermission(currentUser, ['ADMIN', 'PERMISSIONUPDATE']);
        // update permissions
        return ctx.db.mutation.updateUser({
            data: {
                permissions: {
                    set: args.permissions,
                }
            },
            where: {
                id: args.userId
            },
        }, info)
    },
}

module.exports = Mutation;