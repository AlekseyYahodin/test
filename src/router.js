const { Router } = require('express');
const uberController = require('./controllers/uber.controller');

const router = new Router();
router.use('/uber', uberController);

module.exports = router;