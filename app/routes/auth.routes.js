const passport = require('passport');
const {
    Router,
} = require('express');

const sendErrorMessageLogin = (res) => {
    // res.send(desplayServerErrorLogin());
    // return;
    // //     {
    // //     responseMessage: 'Username or Password do not exist!',

    // // });
    // res.json({
    //     bool: true,
    // });
    return;
};

const init = (app, data) => {
    const router = new Router();
    router
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
        .post('/login', (req, res, next) => {
            passport.authenticate('local', (err, user) => {
                if (err) {
                    res.send({
                        responseMessage: err,
                    });
                    return;
                }
                if (!user) {
                    // *** Display message without using flash option
                    // re-render the login form with a message
                    sendErrorMessageLogin(res);
                    return;
                }
                req.logIn(user, (er) => {
                    if (er) {
                        return next(er);
                    }
                    return res.redirect('/user');
                });
            })(req, res, next);
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
