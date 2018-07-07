const { Router } = require('express');
const UberService = require('../services/uber.service');

const router = new Router();
const uberService = new UberService();

router.get('/price', async (req, res) => {
  const { startLatitude, startLongitude, endLatitude, endLongitude } = req.query;
  const response = await uberService.getPrice(startLatitude, startLongitude, endLatitude, endLongitude);
  res.json(response);
});

module.exports = router;