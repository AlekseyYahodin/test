class ValidationError extends Error {
  constructor(msg, incorrectParams) {
    super(msg);
    this.incorrectParams = incorrectParams;
  }
}

module.exports = ValidationError;