const app = require('./app'); 
const config = require('./config');

const startServer = () => {
  app.listen(config.port, () => {
    console.log(`##################################################`);
    console.log(`Servidor Express ejecutándose en modo ${config.nodeEnv} 🛡️`);
    console.log(`API disponible en: http://localhost:${config.port}`);
    console.log(`Endpoint /greet: http://localhost:${config.port}/greet`);
    console.log(`Endpoint /simulate-error: http://localhost:${config.port}/simulate-error`);
    console.log(`##################################################`);
  });
};

startServer();