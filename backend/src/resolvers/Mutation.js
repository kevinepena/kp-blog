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
        console.log(email, password)
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
                largeImages: { set: [...args.images]},
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
}

module.exports = Mutation;