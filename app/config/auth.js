const config = require('../config');
// const express = require('express');


const passport = require('passport');
const {
    Strategy,
} = require('passport-local');


const cookieParser = require('cookie-parser');
const session = require('express-session');
const init = (app, data) => {
    console.log('!!!!!!!!!!!!!!!!!');
    console.log(data);
    const users = [{
        username: 'batman',
        password: 'joker',
    }];
    passport.use(new Strategy(async (username, password, done) => {
        const user = await data.user.getByEmail(username);
        console.log(user);
        // const user =users[0];
    
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
        // return done(null, users[0]);
    }));

    passport.serializeUser((user, done) => {
        done(null, user.username);
    });
    passport.deserializeUser(async (username, done) => {
        const user = users[0];

        if (!user) {
            return done(new Error('invalid used'));
        }

        return done(null, user);
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