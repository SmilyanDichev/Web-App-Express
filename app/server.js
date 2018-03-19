const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const data = require('./database/data');

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

require('./routes/admin.routes').init(app, data);

app.listen(3001);
console.log('Server is running on port 3001');
