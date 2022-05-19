const express = require('express');
const home = require('./api/home/controller');
//const items = require('./api/items/controller');

const app = express();

app.use('/', home);
module.exports = app;