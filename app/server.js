const express = require('express');
const data = require('./data');


const config = require('./config');
const app = express();

require('./config/express').init(app);
require('./config/auth').init(app, data);

require('./routes').init(app, data);

const attachNavButtons = (req, res, next) => {
    res.locals.buttons = req.buttons || null;
    console.log('*********************');
    console.log(res.locals.buttons);
    return next();
};

app.use(attachNavButtons);
// const attachUserToRes = (req, res, next) => {
//     res.locals.user = req.user || null;
//     return next();
// };
// const attachUserToRes = (req, res, next) => {
//     if req.user and  req.user is admin:
//         res.locals.nav = ...
//     else:
//         res.locals.user = req.user || null;
//     return next();
// };

// app.use(attachUserToRes);

app.listen(config.port);
console.log('Server is running on port 3001');