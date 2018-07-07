const ValidationError = require('../errors/validation.error');

module.exports = (err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof ValidationError) {
    res.status(400).json({
      message: 'Validation error',
      incorrectParams: err.incorrectParams
    });
  }

  next();
}
