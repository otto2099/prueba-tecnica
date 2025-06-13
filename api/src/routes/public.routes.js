const express = require('express');
const router = express.Router();

/**
 * @route GET /greet
 * @description Devuelve un mensaje de saludo.
 * @access Public
 */
router.get('/greet', (req, res) => {
  res.json({ message: "Hola Mundo" });
});

/**
 * @route GET /simulate-error
 * @description Devuelve un mensaje de este es un error simulado para probar el middleware de errores.
 * @access Public
 */
router.get('/simulate-error', (req, res, next) => {
  const error = new Error('Este es un error simulado para probar el middleware de errores.');
  error.statusCode = 500; 
  next(error); 
});

module.exports = router;