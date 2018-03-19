const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();
    router
        .get('/', async (req, res) => {
            res.redirect('/admin');
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
