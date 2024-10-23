class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    // if (stack) {
    //   this.stack = stack;
    // } else {
    //   Error.captureStackTrace(this, this.constructor);
    // }

    if (process.env.NODE_ENV === "development") {
      this.stack = stack;
    } else {
      // In production, don't include the stack trace
      this.stack = undefined;
    }
  }
}

module.exports = ApiError;
