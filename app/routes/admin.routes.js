const {
    Router,
} = require('express');

const {
    productPlaceholderAr
} = require('../test-ar');


const init = (app, data) => {
    const router = new Router();
    router
        .get('/', async (req, res) => {
            const viewName = 'index';
            res.render(viewName, {
                products: productPlaceholderAr,
            });
        })
        .get('/admin', async (req, res) => {
            const viewName = 'admin';
            res.render(viewName);
        })
        .get('/categories', async (req, res) => {
            const categories = await data.categories.getAll();
            const context = {
                categories,
            };
            res.send(context);
        });

    app.use('/', router);
};

module.exports = {
    init,
};