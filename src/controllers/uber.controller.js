const { Router } = require('express');
const { coordinatesValidation } = require('../middlewares/uber.middleware');
const UberService = require('../services/uber.service');

const router = new Router();
const uberService = new UberService();

router.get('/price', coordinatesValidation, async (req, res) => {
  const { startLatitude, startLongitude, endLatitude, endLongitude } = req.query;
  const response = await uberService.getPrices(startLatitude, startLongitude, endLatitude, endLongitude);
  res.json(response);
});

module.exports = router;