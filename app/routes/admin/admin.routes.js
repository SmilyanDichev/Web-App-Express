const {
    Router,
} = require('express');

const Controller = require('./admin.controller');

const defaultView = {
    buttons: [{
            href: '/admin/orders',
            text: 'Orders',
        },
        {
            href: '/admin/users',
            text: 'Users',
        },
        {
            href: '/admin/products',
            text: 'Products',
        },
        {
            href: '/admin/categories',
            text: 'Categories',
        },
    ],
};

const init = (app, data) => {
    const router = new Router();
    const controller = new Controller(data);
    router
        .get('/', async (req, res) => {
            const viewName = 'admin';
            defaultView.user = req.user;
            if (defaultView.user) {
                res.render(viewName, defaultView);
            } else {
                res.redirect('/');
            }
        })
        .get('/orders', async (req, res) => {
            const context = await controller.getOrdersByStatus();
            res.render('orders', {
                defaultView,
                context,
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