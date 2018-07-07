const { Router } = require('express');
const { coordinatesValidation } = require('../middlewares/uber.middleware');
const UberService = require('../services/uber.service');
const DistanceExceedsError = require('../errors/distanceExceeds.error');

const router = new Router();
const uberService = new UberService();

router.get('/price', coordinatesValidation, async (req, res) => {
  const { startLatitude, startLongitude, endLatitude, endLongitude } = req.query;
  try {
    const response = await uberService.getPrices(startLatitude, startLongitude, endLatitude, endLongitude);
    res.json(response);
  } catch (error) {
    if (error instanceof DistanceExceedsError) {
      res.status(400).json({
        message: error.message
      });
    }

    throw error;
  }
});

module.exports = router;