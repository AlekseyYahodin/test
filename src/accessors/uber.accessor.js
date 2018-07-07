const BaseHttpAccessor = require('./baseHttpAccessor');
const config = require('config');

class UberAccessor extends BaseHttpAccessor {
  constructor() {
    super();
    this.config = config.uberConfig;
  }

  async getPrices(startLatitude, startLongitude, endLatitude, endLongitude) {
    const serverToken = this.config.serverToken;
    const baseUrl = this.config.urls.baseUrl;
    const url = `${baseUrl}/estimates/price`;

    const headers = {
      'Authorization': `Token ${serverToken}`,
      'Accept-Language': 'en_US'
    };

    const query = {
      start_latitude: startLatitude,
      start_longitude: startLongitude,
      end_latitude: endLatitude,
      end_longitude: endLongitude
    }

    const response = await this.get(url, query, headers);
    return response.prices;
  }
}

module.exports = UberAccessor;
