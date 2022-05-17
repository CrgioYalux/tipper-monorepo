const cors = require('cors');
const express = require('express');
const path = require('path');
const { router } = require('../router/router.js');

const createServer = () => {
  const app = express();

  app.disable('x-powered-by');
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.use(router);
  
  app.get('/health', (_req, res) => {
    res.status(200).send('UP');
  });

  app.use('/', express.static(
    path.join(__dirname, '..', '..', '..', 'client', 'dist')
  ));

  return app;
};

module.exports = { createServer };
