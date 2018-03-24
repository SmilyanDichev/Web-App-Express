const Controller = require('./products.controller');

const init = (app, data) => {
    const controller = new Controller(data);
    app.get('/products', async (req, res) => {
        const context = await controller
            .getProductsPage(req.query.category, req.query.order);
            console.log('='.repeat(15));
            console.log(req.query.order);
            console.log('='.repeat(15));
            res.render('index', context);
    });
};

module.exports = {
    init,
};
