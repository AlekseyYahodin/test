const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const swaggerRouter = require('./swagger');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router);
app.use('/api-docs', swaggerRouter);

module.exports = app;
