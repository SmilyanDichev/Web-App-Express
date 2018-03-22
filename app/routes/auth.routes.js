const {
    Router,
} = require('express');
const passport = require('passport');

const init = (app, data) => {
    const router = new Router();
    console.log('auth routes');
    router.get('/login', (req, res) => {
        res.redirect('/');
    });
    router.post('/login', (req, res) => {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/',
            failureFlash: true,
        });
    });
    app.use('/', router);
};


module.exports = {
    init,
};
