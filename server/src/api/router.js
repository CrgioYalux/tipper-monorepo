const express = require('express');
const router = express.Router();
const { pool } = require('../pg/connection.js');
const { TIP_ROUTES, CLIENT_ROUTES } = require('./routes.js');
const { TIP_QUERIES } = require('../pg/tip/queries.js');
const { CLIENT_QUERIES } = require('../pg/client/queries.js');
const { hashPasswordWithSaltAndPepper, checkIfMatches } = require('../helpers/hashPassword.js');
const { generateSalt } = require('../helpers/generateSalt.js');
const { getPepper } = require('./getPepper.js');
const { checkParams } = require('../helpers/checkParams.js');

router.all('/**/**', (req, res, next) => {
  console.log(`
    ${req.method} ${req.url} at ${Date.now()}
  `);
  next();
});

const execQuery = (query, values, next, callback)=> {
  pool.query(query, [...values], (q_err, q_res) => {
    if (q_err) return next(q_err);
    const rows = JSON.parse(JSON.stringify(q_res.rows));
    callback(rows);
  });
}

// CLIENT ROUTES

router.get(CLIENT_ROUTES.GET, (req, res, next) => {
  const client = req.params[0];

  if (!client || client.toLowerCase().trim() === 'all') return execQuery(CLIENT_QUERIES.GET_ALL, [], next, (found_rows) => {
    // res.status(404).end(); // in case I don't want that getting all the clients in the db is possible
    res.status(200).json({clients: found_rows}).end(); 
  });

  let query = isFinite(Number(client)) ? CLIENT_QUERIES.GET_ONE_FROM_ID : CLIENT_QUERIES.GET_ONE_FROM_NICKNAME;
  execQuery(query, [client], next, (found_rows) => {
    if (found_rows.length === 0) return res.status(404).send("Client not found").end();
    res.status(200).json({client: found_rows[0]}).end();
  });
});

router.post(CLIENT_ROUTES.POST, (req, res, next) => {
  const { nickname, fullname, email, password } = req.body;

  if (!nickname || !fullname || !email || !password) return next("There's empty required fields");

  const salt = generateSalt(32);
  const pepper = getPepper();
  hashPasswordWithSaltAndPepper(password, salt, pepper)
    .then((hash) => {
      execQuery(CLIENT_QUERIES.POST, [nickname, fullname, email, hash, salt], next, (created_rows) => {
        res.status(201).json({client: created_rows[0]}).end();
      });
    })
    .catch(next);
});

router.delete(CLIENT_ROUTES.DELETE, (req, res, next) => {
  const { client, password } = req.body;

  if (!client || !password) return next("There's empty required fields");

  let query = isFinite(Number(client)) ? CLIENT_QUERIES.GET_SALT_FROM_ID : CLIENT_QUERIES.GET_SALT_FROM_NICKNAME;
  execQuery(query, [client], next, (found_rows) => {
    if (found_rows.length === 0) return next("Client not found");

    const { client_id, salt, hash } = found_rows[0];
    const pepper = getPepper();

    checkIfMatches(hash, password + salt + pepper)
    .then((match) => {
      match
        ? execQuery(CLIENT_QUERIES.DELETE, [client_id, hash], next, (deleted_rows) => {
            res.status(204).json({client: deleted_rows[0]}).end();
          })
        : next("Incorrect password");
    });
  });
});

// TIP ROUTES

router.get(TIP_ROUTES.GET, (req, res, next) => {
  const client = req.params[0];
  const tip = req.params[1];
  
  if (!client) return next("No client id or nickname passed");
  if (tip && isNaN(Number(tip))) return next("Tip requested with a string instead of an integer");

  if (!tip) {
    let query = isFinite(Number(client)) ? TIP_QUERIES.GET_ALL_FROM_CLIENT_ID : TIP_QUERIES.GET_ALL_FROM_CLIENT_NICKNAME;
    execQuery(query, [client], next, (found_rows) => {
      res.status(200).json({tips: found_rows}).end();
    });
  } 
  else {
    let query = isFinite(Number(client)) ? TIP_QUERIES.GET_ONE_FROM_CLIENT_ID : TIP_QUERIES.GET_ONE_FROM_CLIENT_NICKNAME;
    execQuery(query, [client, tip], next, (found_rows) => {
      if (found_rows.length === 0) return res.status(404).send("Tip not found");
      res.status(200).json({tip: found_rows[0]}).end();
    });
  }
});

router.post(TIP_ROUTES.POST, (req, res, next) => {
  const { client, password, tip } = req.body;

  if (!client || !password || !tip) return next("There's empty required fields");
  if (tip.trim().length === 0) return next('No tip passed');

  let query = isFinite(Number(client)) ? CLIENT_QUERIES.GET_SALT_FROM_ID : CLIENT_QUERIES.GET_SALT_FROM_NICKNAME;
  execQuery(query, [client], next, (found_rows) => {
    if (found_rows.length === 0) return next("Client not found");

    const { client_id, salt, hash } = found_rows[0];
    const pepper = getPepper();
 
    checkIfMatches(hash, password + salt + pepper)
    .then((match) => {
      match 
        ? execQuery(TIP_QUERIES.POST, [client_id, tip], next, (created_rows) => {
            res.status(201).json({tip: created_rows[0]}).end();
          })
        : next("Incorrect password");
    });
  });
});

router.delete(TIP_ROUTES.DELETE, (req, res, next) => {
  const { client, password, tip } = req.body;

  if (!client || !password || !tip) return next("There's empty required fields");
  if (isNaN(Number(tip))) return next("Tip requested with a string instead of an integer");
  
  let query = isFinite(Number(client)) ? CLIENT_QUERIES.GET_SALT_FROM_ID : CLIENT_QUERIES.GET_SALT_FROM_NICKNAME;
  execQuery(query, [client], next, (found_rows) => {
    if (found_rows.length === 0) return next("Client not found");

    const { client_id, salt, hash } = found_rows[0];
    const pepper = getPepper();

    checkIfMatches(hash, password + salt + pepper)
    .then((match) => {
      match
        ? execQuery(TIP_QUERIES.DELETE, [client_id, tip], next, (deleted_rows) => {
            res.status(204).json({tip: deleted_rows[0]}).end();
          })
        : next("Incorrect password");
    });
  });
});

router.use((err, req, res, next) => {
  res.status(400).json({error:err}).end();
});

module.exports = { router };
