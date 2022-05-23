const express = require('express');
const router = express.Router();
const { pool } = require('../pg/connection.js');
const { TIP_ROUTES, CLIENT_ROUTES } = require('./routes.js');
const { TIP_QUERIES } = require('../pg/tip/queries.js');
const { CLIENT_QUERIES } = require('../pg/client/queries.js');
const { hashPasswordWithSaltAndPepper } = require('../helpers/hashPassword.js');
const { generateSalt } = require('../helpers/generateSalt.js');
const { getPepper } = require('./getPepper.js');
const { checkParams } = require('../helpers/checkParams.js');

router.all('/**/**', (req, res, next) => {
  console.log(`
    ${req.method} ${req.url}
  `);
  next();
});

// CLIENT REQUESTS

router.get(CLIENT_ROUTES.GET_ONE, (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.json({message: "No ID specified"}).status(400).end();
  pool.query(CLIENT_QUERIES.GET_ONE(id), (q_err, q_res) => {
    if (q_err) return next(q_err);
    const rows = JSON.parse(JSON.stringify(q_res.rows));
    res.json({rows}).status(302).end();
  });
});

router.post(CLIENT_ROUTES.CREATE, (req, res, next) => {
  const { nickname, firstname, lastname, email, password } = req.params;
  if (!checkParams([nickname, firstname, lastname, email, password])) 
    return res.json({message: "There's empty required fields"}).status(400).end();

  const salt = generateSalt(32);
  const pepper = getPepper();
  const hash = hashPasswordWithSaltAndPepper(password, salt, pepper);

  pool.query(CLIENT_QUERIES.CREATE(nickname, firstname, lastname, email, hash, salt), (q_err, q_res) => {
    if (q_err) return next(q_err);
    const rows = JSON.parse(JSON.stringify(q_res.rows));
    res.json({rows}).status(302).end();
  });
});

router.get(CLIENT_ROUTES.DELETE, (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.json({message: "No ID specified"}).status(400).end();
  pool.query(CLIENT_QUERIES.DELETE(id), (q_err, q_res) => {
    if (q_err) return next(q_err);
    const rows = JSON.parse(JSON.stringify(q_res.rows));
    res.json({rows}).status(302).end();
  });
});

// TIP REQUESTS 

router.get(TIP_ROUTES.GET_ALL, (req, res, next) => {
  const { client_id } = req.params;
  if (!client_id) return res.json({message: "No Client ID specified"}).status(400).end();
  pool.query(TIP_QUERIES.GET_ALL(client_id), (q_err, q_res) => {
    if (q_err) return next(q_err);
    const rows = JSON.parse(JSON.stringify(q_res.rows));
    res.json({rows}).status(302).end();
  });
});

router.get(TIP_ROUTES.GET_ONE, (req, res, next) => {
  // to be able to do api/tip/get/:user/:tip_id would be nice
  // for now i'll use the client_id instead of the user's nickname
  const { client_id, tip_id } = req.params;
  if (!checkParams([client_id, tip_id])) 
    return res.json({message: "There's empty required fields"}).status(400).end();
  pool.query(TIP_QUERIES.GET_ONE(client_id, tip_id), (q_err, q_res) => {
    if (q_err) return next(q_err);
    const rows = JSON.parse(JSON.stringify(q_res.rows));
    res.json({rows}).status(302).end();
  });
});

router.get(TIP_ROUTES.CREATE, (req, res, next) => {
  const { client_id, body } = req.params;
  if (!checkParams([client_id, body])) 
    return res.json({message: "There's empty required fields"}).status(400).end();
  pool.query(TIP_QUERIES.CREATE(client_id, body), (req, res, next) => {
    if (q_err) return next(q_err);
    const rows = JSON.parse(JSON.stringify(q_res.rows));
    res.json({rows}).status(302).end();
  });
});

router.get(TIP_ROUTES.DELETE, (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.json({message: "No ID specified"}).status(400).end();
  pool.query(TIP_QUERIES.DELETE(id), (req, res, next) => {
    if (q_err) return next(q_err);
    const rows = JSON.parse(JSON.stringify(q_res.rows));
    res.json({rows}).status(302).end();
  })
});

router.use((err, req, res, next) => {
  res.json({error: `Query failed: ${err}`}).status(409).end();
});

module.exports = { router };
