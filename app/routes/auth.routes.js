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
        .get('/logout', (req, res) => {
            req.logout();
            res.redirect('/');
        })
        .post('/register', (req, res) => {
            data.user.create(req.body);
            return res.redirect('/');
        })
        .post('/login',
            passport.authenticate('local', {
                successRedirect: '/',
                failureRedirect: '/login',
                failureFlash: false,
            })
        );

    app.use('/', router);
};


module.exports = {
    init,
};
