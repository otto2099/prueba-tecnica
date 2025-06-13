const { query, validationResult } = require('express-validator');

const validateSumParams = [
  query('a')
    .exists().withMessage('El parámetro "a" es requerido.')
    .notEmpty().withMessage('El parámetro "a" no puede estar vacío.')
    .isNumeric().withMessage('El parámetro "a" debe ser un número válido.')
    .toFloat(), 
  query('b')
    .exists().withMessage('El parámetro "b" es requerido.')
    .notEmpty().withMessage('El parámetro "b" no puede estar vacío.')
    .isNumeric().withMessage('El parámetro "b" debe ser un número válido.')
    .toFloat(), 

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next(); 
  }
];

module.exports = { validateSumParams };