const {
  db_user:user,
  db_host:host,
  db_name:database,
  db_pass:password,
  db_port:port
} = require('../config/pg.js');
const { Pool } = require('pg');

const pool = new Pool({
  user,
  host,
  database,
  password,
  port
});

module.exports = { pool };
