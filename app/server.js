const express = require('express');

const data = require('./database/data');

const config = require('./config');
const app = express();

require('./config/express').init(app);
require('./routes/admin.routes').init(app, data);

app.listen(config.port);
console.log('Server is running on port 3001');
