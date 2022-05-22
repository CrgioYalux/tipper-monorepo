const express = require('express');
const { pool } = require('../pg/connection.js');
const router = express.Router();

router.use((err, req, res, next) => {
  res.json({error: `Query failed: ${err}`}).status(409).end();
});

router.all('*', (req, res, next) => {
  console.log(`
    ${req.method} ${req.url}
  `);
  res.status(404).end('Page not found');
});

module.exports = { router };
