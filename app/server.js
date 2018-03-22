const express = require('express');
const data = require('./data');


const config = require('./config');
const app = express();

require('./config/express').init(app);
require('./routes/admin.routes').init(app, data);
require('./config/auth/auth').init(app, data);

// const attachUserToRes = (req, res, next) => {
//     res.locals.user = req.user || null;
//     return next();
// };

// app.use(attachUserToRes);

app.listen(config.port);
console.log('Server is running on port 3001');
