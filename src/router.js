const { Router } = require('express');
const testController = require('./controllers/test.controller');

const router = new Router();
router.use('/test', testController);

module.exports = router;