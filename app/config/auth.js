const config = require('../config');

const cookieParser = require('cookie-parser');
const session = require('express-session');

const passport = require('passport');
const {
    Strategy,
} = require('passport-local');

//  temp user
const users = [{
    username: 'pesho@abv.bg',
    password: '1',
}];

const init = (app) => {

    passport.use(new Strategy((username, password, done) => {
        console.log('use strategy');
        // db query temp placeholder
        const user = user[0];
        
        if (!user) {
            return done(null, false, {
                message: 'Incorrect username.',
            });
        }
        console.log(user);
        // user with such username exists
        if (user.password !== password) {
            return done(null, false, {
                message: 'Incorrect password.',
            });
        }
        // user with such username and password exists
        return done(null, user);
    }));

    // User to string
    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    // string to User
    passport.deserializeUser(async (username, done) => {
        const user = await data.users.findByUsername(username);
        if (!user) {
            return done(new Error('invalid used'));
        }
        return done(null, user);
    });


    app.use(cookieParser());
    app.use(session({
        secret: 'team one go',
    }));
    app.use(passport.initialize());
    app.use(session());
};


module.exports = {
    init,
};


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