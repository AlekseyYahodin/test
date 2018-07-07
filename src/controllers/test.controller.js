const { Router } = require('express');
const TestService = require('../services/test.service');

const router = new Router();
const testService = new TestService();

router.get('/', async (req, res) => {
  const respones = await testService.test();
  res.send(respones);
});

module.exports = router;