const app = require('./app'); 
const config = require('./config'); 

const startServer = () => {
  const server = app.listen(config.port, () => {
    console.log(`###########################################################`);
    console.log(`Microservicio de Suma ejecutándose en modo ${config.nodeEnv}`);
    console.log(`API disponible en: http://localhost:${config.port}`);
    console.log(`Endpoint /add: http://localhost:${config.port}/add?a=10&b=20`);
    console.log(`###########################################################`);
  });

  process.on('SIGTERM', () => {
    console.log('SIGTERM recibido. Cerrando servidor...');
    server.close(() => {
      console.log('Servidor cerrado.');
      process.exit(0);
    });
  });

  process.on('SIGINT', () => {
    console.log('SIGINT recibido. Cerrando servidor...');
    server.close(() => {
      console.log('Servidor cerrado.');
      process.exit(0);
    });
  });
};

startServer();