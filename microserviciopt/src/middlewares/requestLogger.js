const morgan = require('morgan');
const config = require('../config');

const loggerFormat = config.nodeEnv === 'production' ? 'combined' : 'dev';

module.exports = morgan(loggerFormat);