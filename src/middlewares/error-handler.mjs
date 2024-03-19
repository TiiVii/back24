/**
* Generic 404 handler
* @param {object} req - request object
* @param {object} res - response object
* @param {function} next - next function
*/
const notFoundHandler = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    error.status = 404;
    next(error); // forward error to error handler
  };
  
  /**
  * Custom default middleware for handling errors
  * @param {object} err - error object
  * @param {object} req - request object
  * @param {object} res - response object
  * @param {function} next - next function
  */
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500); // default is 500 if err.status is not defined
  res.json({
    error: {
      message: err.message,
      status: err.status || 500,
      errors: err.errors || '',
    },
  });
};

const unprocessableEntityErrorHandler = (err, req, res, next) => {
  if (err.status === 422) {
      res.status(422);
      res.json({
          error: {
              message: err.message,
              status: 422,
              errors: err.errors || '',
          },
      });
  } else {
      next(err); // forward the error to the next error handler
  }
};

const validationErrorHandler = (req, res, next) => {
  const errors = validationResult(req, {strictParams: ['body']});
  if (!errors.isEmpty()) {
    // console.log('validation errors', errors.array({onlyFirstError: true}));
    const error = customError('Bad Request', 400);
    error.errors = errors.array({onlyFirstError: true}).map((error) => {
      return {field: error.path, message: error.msg};
    });
    return next(error);
  }
  next();
};

export { notFoundHandler, errorHandler, unprocessableEntityErrorHandler, validationErrorHandler };