const {
    Router,
} = require('express');

const Controller = require('./home.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new Controller(data);
    router
        .get('/', async (req, res) => {
            const context = await controller.getHome();
            res.render('index', context);
        })
        .get('/products', async (req, res) => {
            const context = await controller
                .getProductsByCategory(req.query.category);
            res.render('index', context);
        });
    app.use('/', router);
};

module.exports = {
    init,
};
