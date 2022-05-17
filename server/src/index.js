const http = require('http');
const { createServer } = require('./config/express.js');

const port = process.env.PORT || '5000';
const host = process.env.host || 'localhost';

const startServer = async () => {
  const app = await createServer();
  const server = http.createServer(app).listen({ host, port }, () => {
    const addressInfo = server.address();
    console.log(
      `Server ready on http://${addressInfo.address}:${addressInfo.port}`
    );
  });
};

startServer();
