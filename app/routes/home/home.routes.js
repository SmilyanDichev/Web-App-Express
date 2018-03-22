const Controller = require('./home.controller');

const init = (app, data) => {
    const controller = new Controller(data);
    app.get('/', async (req, res) => {
        const context = await controller.getHome();
        res.render('index', context);
    });
};

module.exports = {
    init,
};
