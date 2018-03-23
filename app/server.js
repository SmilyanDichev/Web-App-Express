const express = require('express');
const data = require('./data');


const config = require('./config');
const app = express();

require('./config/express').init(app);
require('./config/auth').init(app, data);

require('./routes').init(app, data);

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

const test = async () => {
    const result = await data.user.getByEmail('bobi11@gmail.com');
    console.log(result);
};
test();


app.listen(config.port);
console.log('Server is running on port 3001');