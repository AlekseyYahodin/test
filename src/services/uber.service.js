const UberAccessor = require('../accessors/uber.accessor');

class TestService {
  constructor() {
    this.uberAccessor = new UberAccessor();
  }

  async getPrice(startLatitude, startLongitude, endLatitude, endLongitude) {
    return await this.uberAccessor.getPrice(startLatitude, startLongitude, endLatitude, endLongitude);
  }
}

module.exports = TestService;
