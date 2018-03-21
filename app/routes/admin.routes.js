const {
    Router,
} = require('express');

const {
    productPlaceholderAr,
    buttonPlaceholderAr,
} = require('../test-ar');
console.log(buttonPlaceholderAr);

const init = (app, data) => {
    const router = new Router();
    router
        .get('/', async (req, res) => {
            res.redirect('index');
        })
        .get('/index', async (req, res) => {
            const viewName = 'index';
            res.render(viewName, {
                products: productPlaceholderAr,
                buttons: buttonPlaceholderAr,
            });
        })
        .get('/admin', async (req, res) => {
            const viewName = 'admin';
            res.render(viewName, {
                buttons: [{ href: '/orders', text: 'Orders' },
                { href: '/users', text: 'Users' },
                { href: '/products', text: 'Products' },
                { href: '/categories', text: 'Categories' }],
            });
        })
        .get('/categories', async (req, res) => {
            const categories = await data.category.getAll();
            const context = {
                categories,
            };
            res.send(context);
        })
        .get('/users', async (req, res) => {
            const users = await data.user.findByEmail('admin1@foodstore.com');
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