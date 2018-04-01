const {
    Router,
} = require('express');

const Controller = require('../home/home.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new Controller(data);

    router
        .get('/promos', async (req, res) => {
            const allPromoProducts = await controller.getHome();
            res.send(allPromoProducts);
        })
        .get('/:category', async (req, res) => {
            const category = req.params.category;
            const allFruits = await controller.getProductsByCategory(category);
            res.send(allFruits);
        });

    app.use('/api', router);
};

module.exports = {
    init,
};
