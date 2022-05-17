const express = require('express');
const { pool } = require('../pg/connection.js');
const router = express.Router();

router.all('/**/**', (req, res, next) => {
  console.log(`
    ${req.method} ${req.url}
  `);
  next();
});

router.use((err, req, res, next) => {
  res.json({error: `Query failed: ${err}`}).status(409).end();
});

module.exports = { router };
