const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');
const router = require('./router');
const swaggerRouter = require('./swagger');

const commonErrorHandler = require('./errorHandlers/commonError.handler');
const validationErrorHandler = require('./errorHandlers/validationError.handler');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router);
app.use('/api-docs', swaggerRouter);

app.use(validationErrorHandler);
app.use(commonErrorHandler);

module.exports = app;
