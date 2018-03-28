const {
    Router,
} = require('express');

const Controller = require('./admin.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new Controller(data);
    router
        .get('/', async (req, res) => {
            if (req.user && req.user.isAdmin) {
                res.render('admin');
            } else {
                res.redirect('/');
            }
        })
        .get('/orders', async (req, res) => {
            if (req.user && req.user.isAdmin) {
                const context = await controller.getOrdersByStatus();
                res.render('orders', {
                    context,
                });
            } else {
                res.redirect('/');
            }
        })
        .post('/orders', async (req, res) => {
            const order = req.body;
            const orderId = +order.orderId;
            const newStatus = +order.statusId;
            await controller.updateOrderStatus(orderId, newStatus);
            res.redirect('/admin/orders');
        })
        .get('/categories', async (req, res) => {
            const categories = await data.category.getAll();
            const context = {
                categories,
            };
            res.send(context);
        })
        .get('/users', async (req, res) => {
            const users = await data.user.getAll();
            const context = {
                users,
            };
            res.send(context);
        });

    app.use('/admin', router);
};

module.exports = {
    init,
};
