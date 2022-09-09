const argon2 = require('argon2');
const Router = require('koa-router');
const router = new Router();
const knex = require('../knex/knex.js');

// TODO: add auth
router.get('/api/user/:id', async ctx => {
    const user = await knex('users')
        .select({
            id: 'id',
            email: 'email'
        })
        .where('id', ctx.params.id)
        .first()
        .then((user) => {
            return ctx.body = user;
        })
        .catch((ctx) => {
            ctx.status = error.status || 500;
            ctx.body = { error: error.message || "Oh No! Something went wrong! " };
            ctx.app.emit('error', error, ctx);
        });
});

// endpoint for signing in to the app
router.post('/api/signin', async ctx => {
    // convert password to hash and compare to password in DB
    // check if user exists
    const result = await knex('users')
    .select('*')
    .where({
        'email' : ctx.request.body.username
    })
    .first()
    .then((user) => {
        console.log(user , 'RES USER');
        return user;
    })
    .catch((err) => {
        // TODO: have a single ERROR catch here
        console.error(err, ' eerrrrrrrrrrrrr');
    });

    // IF username is incorrect, throw 400
    if(!result) {
        return ctx.throw(400, 'Email not found');
    };
    

    const pwdsMatch = await argon2.verify(result.password, ctx.request.body.password);

    if(pwdsMatch){
        return ctx.body = "success";
        // TODO: add cookie to keep track of logged in user
        // now run the function to place cookie for verification!
    } else {
        // tell user their password is wrong
        return ctx.throw(400, 'Incorrect Password');
    }
});

module.exports = router;