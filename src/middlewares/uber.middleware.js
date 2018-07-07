const ValidationError = require('../errors/validation.error');

const coordinatesValidation = async (req, res, next) => {
  const { startLatitude, startLongitude, endLatitude, endLongitude } = req.query;
  const incorrectParams  = [];

  if (!Number(startLatitude)) {
    incorrectParams.push({ name: 'startLatitude', value: startLatitude });
  }

  if (!Number(startLongitude)) {
    incorrectParams.push({ name: 'startLongitude', value: startLongitude });
  }

  if (!Number(endLatitude)) {
    incorrectParams.push({ name: 'endLatitude', value: endLatitude });
  }

  if (!Number(endLongitude)) {
    incorrectParams.push({ name: 'endLongitude', value: endLongitude });
  }

  if (incorrectParams.length) {
    next(new ValidationError('Incorrect query params', incorrectParams));
  }

  next();
}

module.exports = {
  coordinatesValidation
}
