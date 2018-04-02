const {
    Router,
} = require('express');

const Controller = require('./user.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new Controller(data);
    router
        .get('/', async (req, res) => {
            if (req.user) {
                const email = req.user.email;
                const context = await controller.getUserOrdersHistory(email);
                res.render('user/user', context);
            } else {
                res.render('user/anon');
            }
        })
        .get('/cart', async (req, res) => {
            // console.log('in cart');
            const userId = req.user.id;
            // console.log('id '+ userId );
            const inCart = await controller.getActiveOrder(userId);
            res.status(200).json(inCart);
        })
        .post('/confirm', async (req, res) => {
            const userId = req.user.id;
            await controller.confirmInCartOrder(userId);
            res.send(200);
        })
        .post('/', async (req, res) => {
            if (req.user && !req.user.isAdmin) {
                const order = req.body;
                const userId = req.user.id;
                await controller.updateOrCreateUserOrder(order, userId);
            } else {
                res.redirect('/');
            }
        });
    app.use('/user', router);
};

module.exports = {
    init,
};
