const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();
    router
        .get('/admin', async (req, res) => {
            const viewName = 'admin';
            res.render(viewName, {
                user: 'Admin1',
                loggedIn: true,
                buttons: [{
                        href: '/orders',
                        text: 'Orders',
                    },
                    {
                        href: '/users',
                        text: 'Users',
                    },
                    {
                        href: '/products',
                        text: 'Products',
                    },
                    {
                        href: '/categories',
                        text: 'Categories',
                    }
                ],
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
            const users = await data.user.getByEmail('admin1@foodstore.com');
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