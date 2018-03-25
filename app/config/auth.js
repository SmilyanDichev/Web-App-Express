const config = require('../config');
const passport = require('passport');
const {
    Strategy,
} = require('passport-local');


const cookieParser = require('cookie-parser');
const session = require('express-session');

const init = (app, data) => {
    passport.use(new Strategy({
        usernameField: 'email',
        passwordField: 'password',
      }, async (email, password, done) => {
        const user = await data.user.getByEmail(email);
        if (!user || user.password !== password) {
            return done(null, false);
        }
        return done(null, user);
    }));

    passport.serializeUser((email, done) => {
        done(null, email);
    });
    passport.deserializeUser(async (email, done) => {
        if (!email) {
            return done(new Error('invalid user'));
        }

        return done(null, email);
    });


    app.use(cookieParser());
    app.use(session({
        secret: config.secret,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
};


module.exports = {
    init,
};
