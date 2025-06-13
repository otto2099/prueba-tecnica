// src/app.js
const express = require('express');
const helmet = require('helmet'); // Seguridad HTTP básica
const config = require('./config');
const requestLogger = require('./middleware/requestLogger');
const errorHandler = require('./middleware/errorHandler');
const publicRoutes = require('./routes/public.routes');

const app = express();

app.use(helmet());

app.use(express.json());

app.use(requestLogger);

app.use('/', publicRoutes);

app.use(errorHandler);

module.exports = app;