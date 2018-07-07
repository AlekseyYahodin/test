const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');
const router = require('./router');
const swaggerRouter = require('./swagger');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router);
app.use('/api-docs', swaggerRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
