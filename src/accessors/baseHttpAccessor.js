const requestPromise = require('request-promise');

class BaseHttpAccessor {
  async get(uri, query, headers) {
    const options = {
      uri,
      headers,
      qs: query,
      json: true
    }
    return await requestPromise(options);
  }
}

module.exports = BaseHttpAccessor;
