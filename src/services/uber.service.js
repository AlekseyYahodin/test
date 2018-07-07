const UberAccessor = require('../accessors/uber.accessor');

const NAME_PREFIX = 'After'
const DESCEND_COEFFICIENT = 0.8;

class TestService {
  constructor() {
    this.uberAccessor = new UberAccessor();
  }

  async getPrices(startLatitude, startLongitude, endLatitude, endLongitude) {
    const uberPrices = await this.uberAccessor.getPrices(startLatitude, startLongitude, endLatitude, endLongitude);
    const newPrices = uberPrices.map((uberPrice) => {
      const newName = `${NAME_PREFIX}${uberPrice.display_name}`

      if (uberPrice.estimate === 'Metered') {
        return {
          name: newName,
          price: uberPrice.estimate
        }
      }

      const lowEstimate = uberPrice.low_estimate;
      const highEstimate = uberPrice.high_estimate;

      const newLowEstimate = Math.round(DESCEND_COEFFICIENT * lowEstimate)
      const newHighEstimate = Math.round(DESCEND_COEFFICIENT * highEstimate);

      return {
        name: newName,
        price: `${uberPrice.currency_code}${newLowEstimate}-${newHighEstimate}`
      };
    });
    return newPrices;
  }
}

module.exports = TestService;
