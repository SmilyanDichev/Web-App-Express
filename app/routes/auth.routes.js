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
        .post('/signin', (req, res) => {
            res.render('login');
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
