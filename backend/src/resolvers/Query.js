const { forwardTo } = require('prisma-binding');

const Query = {
    post: forwardTo('db'),
    posts: forwardTo('db'),
    postsConnection: forwardTo('db'),
    me(parent, args, ctx, info) {
        // check if there is a current user ID
        if (!ctx.request.userId) {
            return null;
        }
        // return user;
        return ctx.db.query.user({
            where: { id: ctx.request.userId }
        }, info);
    },
    tag: forwardTo('db') ,
    tags: forwardTo('db') ,
}

module.exports = Query;