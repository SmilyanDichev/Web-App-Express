const {
    Router,
} = require('express');

const Controller = require('./user.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new Controller(data);
    router
        .get('/', async (req, res) => {
            if (req.user) {
                const email = req.user.email;
                const context = await controller.getUserOrdersHistory(email);
                res.render('user/user', context);
            } else {
                res.redirect('user/anon');
            }
        })
        .get('/anon', (req, res) => {
            const context = req.body;
            // console.log("!!!!!!!!!!");
            // console.log(req.body);
            res.render('user/anon');
            // res.send('success');

            // res.send('user/anon');
        })
        // .get('/anon', (req, res) => {
        //     const context = req.body;
        //     console.log(context);
        //     // res.render('user/anon', context);
        //     // // res.send('user/anon');
        // })

        ;

    app.use('/user', router);
};
module.exports = {
    init,
};

// !req.user.isAdmin
