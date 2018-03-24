const passport = require('passport');
const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();
    router
        .get('/login', (req, res) => {
            res.render('login');
        })
        .get('/register', (req, res) => {
            console.log('get register');
        })
        .post('/register', (req, res) => {
            console.log(req.body);
            const address = `${req.body.city} ${req.body.street} ${req.body.apartment}`;
            const newUser = {
                name: req.body.name,
                email: req.body.email,
                address,
                isAdmin: 0,
                password: req.body.password,
            };
            console.log(newUser);
            // data.user.create(newUser);
            return res.redirect('/');
        })
        .post('/login',
            passport.authenticate('local', {
                successRedirect: '/admin',
                failureRedirect: '/login',
                failureFlash: false,
            }));

    app.use('/', router);
};


module.exports = {
    init,
};
