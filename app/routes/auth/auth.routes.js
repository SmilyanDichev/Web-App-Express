const passport = require('passport');
const {
    Router,
} = require('express');

const Controller = require('../user/user.controller');


const init = (app, data) => {
    const router = new Router();
    const controller = new Controller(data);
    router
        .get('/logout', (req, res) => {
            req.logout();
            res.redirect('/');
        })
        .get('/login', (req, res) => {
            res.render('login');
        })
        .post('/register', async (req, res) => {
            await controller.createUser(req.body);
            return res.redirect('/');
        })
        .post('/login', (req, res, next) => {
            passport.authenticate('local', (err, user, info) => {
                if (err) {
                    return res.status(400).json(err);
                }
                if (!user) {
                    return res.status(300).json(user);
                }
                req.logIn(user, (er) => {
                    if (er) {
                        return next(er);
                    }
                    return res.status(200).json(user);
                });
                return err;
            })(req, res, next);
        });
    app.use('/', router);
};
module.exports = {
    init,
};
