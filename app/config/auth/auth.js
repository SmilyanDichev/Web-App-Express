const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const {
    Strategy,
} = require('passport-local');

//  temp user
const users = [{
    username: 'Pesho',
    password: '12345',
}];

const init = (app) => {
    passport.use(new Strategy((username, password, done) => {
        // db query temp placeholder
        const user = users((dbUser) => {
            dbUser.username === username;
        });


        if (!user) {
            return done(null, false, {
                message: 'Incorrect username.',
            });
        }
        // user with such username exists
        if (user.password !== password) {
            return done(null, false, {
                message: 'Incorrect password.',
            });
        }
        // user with such username and password exists
        return done(null, user);

        // User.findOne({
        //     username: username,
        // }, (err, user) => {
        //     if (err) {
        //         return done(err);
        //     }
        //     if (!user) {
        //         return done(null, false, {
        //             message: 'Incorrect username.',
        //         });
        //     }
        //     if (!user.validPassword(password)) {
        //         return done(null, false, {
        //             message: 'Incorrect password.',
        //         });
        //     }
        //     return done(null, user);
        // });
    }));

    // app.use(express.static('public'));
    // app.use(express.bodyParser());

    app.use(cookieParser());
    app.use(session({
        secret: 'team one go',
    }));
    app.use(passport.initialize());
    app.use(passport.session());
};


module.exports = {
    init,
};
