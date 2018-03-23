const Controller = require('./products.controller');

const init = (app, data) => {
    const controller = new Controller(data);
    app.get('/products', async (req, res) => {
        const context = await controller
            .getProductsPage(req.query.category);
        res.render('index', context);
    });
};

module.exports = {
    init,
};
