const { Router } = require('express');
const swaggerUi = require('swagger-ui-express-lightweight');
const swaggerDocument = require('./swagger.json');

const router = new Router();
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
