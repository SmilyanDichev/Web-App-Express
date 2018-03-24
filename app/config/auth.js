const config = require('../config');
const passport = require('passport');
const {
    Strategy,
} = require('passport-local');


const cookieParser = require('cookie-parser');
const session = require('express-session');
const init = (app, data) => {
    passport.use(new Strategy(async (username, password, done) => {
        const user = await data.user.getByEmail(username);
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    }));

    passport.serializeUser((username, done) => {
        done(null, username);
    });
    passport.deserializeUser(async (username, done) => {
        if (!username) {
            return done(new Error('invalid used'));
        }

        return done(null, username);
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
