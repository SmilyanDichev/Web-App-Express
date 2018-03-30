const {
    Router,
} = require('express');

const Controller = require('./user.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new Controller(data);
    router
        .get('/', async (req, res) => {
            if (req.user && !req.user.isAdmin) {
                const email = req.user.email;
                const context = await controller.getUserOrdersHistory(email);
                res.render('user/user', context);
            } else {
                res.redirect('user/anon');
            }
        })
        .get('anon', (req, res) => {
            res.render('user/anon');
        });
    app.use('/user', router);
};
module.exports = {
    init,
};
