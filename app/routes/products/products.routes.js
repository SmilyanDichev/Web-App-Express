const Controller = require('./products.controller');

const init = (app, data) => {
    const controller = new Controller(data);
    app.get('/products', async (req, res) => {
        const products = await controller.getAll();
        res.send(products);
    });
};

module.exports = {
    init,
};
