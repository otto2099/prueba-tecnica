const express = require('express');
const { validateSumParams } = require('../validators/sum.validators');

const router = express.Router();

/**
 * @route GET /add
 * @description Suma dos números recibidos como query parameters 'a' y 'b'.
 * @access Public
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {json} { result: number } o { errors: array } si la validación falla.
 */
router.get('/add', validateSumParams, (req, res, next) => {
  try {
    const numA = parseFloat(req.query.a);
    const numB = parseFloat(req.query.b);

    const sum = numA + numB;
   console.log(`[${new Date().toISOString()}] Sumando: ${numA} + ${numB} = ${sum}`);


    res.status(200).json({ result: sum });
  } catch (error) {
    next(error);
  }
});

module.exports = router;