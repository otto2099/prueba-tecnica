const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500; 
  const message = err.message || 'Error interno del servidor. Por favor, inténtelo de nuevo más tarde.';

  console.error(`[ERROR] ${new Date().toISOString()} - ${req.method} ${req.originalUrl || req.url}`);
  console.error(err.stack);

  if (process.env.NODE_ENV === 'development') {
    return res.status(statusCode).json({
      status: 'error',
      message: message,
      stack: err.stack, 
    });
  }

  res.status(statusCode).json({
    status: 'error',
    message: 'Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde.',
  });
};

module.exports = errorHandler;