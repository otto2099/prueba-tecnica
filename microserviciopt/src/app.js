const express = require('express');
const helmet = require('helmet'); 
const requestLogger = require('./middlewares/requestLogger');
const errorHandler = require('./middlewares/errorHandler');
const sumRoutes = require('./routes/sum.routes');
const config = require('./config'); 

const app = express();


app.use(helmet());

app.use(requestLogger);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', sumRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Bienvenido al Microservicio de Suma (v1.0).',
    instructions: `Usa el endpoint /add con parámetros 'a' y 'b'. Ejemplo: http://localhost:${config.port}/add?a=10&b=20`
  });
});

app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada.');
  error.statusCode = 404; 
  next(error); 
});

app.use(errorHandler);

module.exports = app;