const {
    Router,
} = require('express');

const {
    productPlaceholderAr,
    buttonPlaceholderAr,
} = require('../test-ar');

const {
    ProductsController,
} = require('./products.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new ProductsController(data);
    router
        .get('/', async (req, res) => {
            const viewName = 'index';
            res.render(viewName, {
                products: productPlaceholderAr,
                buttons: buttonPlaceholderAr,
            });
        })
        .get('/products', async (req, res) => {
            const products = await controller.getAll();
            // const context = { products };
            res.send(products);
        })
        .get('/admin', async (req, res) => {
            const viewName = 'admin';
            res.render(viewName, {
                user: 'Admin1',
                loggedIn: true,
                buttons: [{ href: '/orders', text: 'Orders' },
                { href: '/users', text: 'Users' },
                { href: '/products', text: 'Products' },
                { href: '/categories', text: 'Categories' }],
            });
        })
        .get('/categories', async (req, res) => {
            const categories = await controller.getAll();
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
        })
        .get('/orders', async (req, res) => {
            const orders = await data.order.getAll();
            const context = {
                orders,
            };
            res.send(context);
        });

    app.use('/', router);
};

module.exports = {
    init,
};
