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
                res.render('admin/orders', context);
            } else {
                res.redirect('/');
            }
        })
        // .get('/users', async (req, res) => {
        //     const users = await data.user.getAll();
        //     const context = {
        //         users,
        //     };
        //     res.send(context);
        // })
        .get('/products', async (req, res) => {
            if (req.user && req.user.isAdmin) {
                const context = await controller.getAllProducts();
                res.render('admin/products', context);
            } else {
                res.redirect('/');
            }
        })
        // .get('/categories', async (req, res) => {
        //     const categories = await data.category.getAll();
        //     const context = {
        //         categories,
        //     };
        //     res.send(context);
        // })
        .post('/orders', async (req, res) => {
            const order = req.body;
            const orderId = +order.orderId;
            const newStatus = +order.statusId;
            await controller.updateOrderStatus(orderId, newStatus);
            res.redirect('/admin/orders');
        })
        .post('/products/create', async (req, res) => {
            const product = req.body;
            await controller.createProduct(product);
            res.redirect('/admin/products');
        })
        .post('/products/update', async (req, res) => {
            const product = req.body;
            await controller.updateProduct(product);
            res.redirect('/admin/products');
        });

    app.use('/admin', router);
};

module.exports = {
    init,
};
