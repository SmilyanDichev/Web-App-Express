const express = require('express');
const data = require('./data');


const config = require('./config');
const app = express();

require('./config/express').init(app);
require('./config/auth').init(app, data);

const attachUserToRes = (req, res, next) => {
    res.locals.user = req.user || null;
    return next();
};

const attachNavButtons = async (req, res, next) => {
    const navButtons = await require('./config/navigation').init(data);
    if (req.user && req.user.isAdmin) {
        res.locals.navButtons = navButtons.adminButtons;
    } else {
        res.locals.navButtons = navButtons.defaultButtons;
    }
    return next();
};

app.use(attachUserToRes);
app.use(attachNavButtons);

require('./routes').init(app, data);

app.listen(config.port);
console.log('Server is running on port 3001');