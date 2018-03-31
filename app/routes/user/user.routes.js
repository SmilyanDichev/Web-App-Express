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
                // await controller.getOrderFromLocalStorage();
                res.render('user/user', context);
            } else {
                res.render('user/anon');
            }
        })
        .post('/', async (req, res) => {
            // NEEDS MORE WORK
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