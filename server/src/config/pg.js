const __prod__ = process.env.NODE_ENV === 'production';

if (__prod__) {
  module.exports = {
    db_user: process.env.DB_USER,
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME,
    db_pass: process.env.DB_PASS,
    db_port: process.env.DB_PORT
  };
} else {
  const dotenv = require('dotenv');
  const path = require('path');

  const path_to_env = path.join(
    __dirname, '..', '..', '..', '.env'
  );

  const env = dotenv.config({ path: path_to_env }).parsed;

  module.exports = {
    db_user: env.DB_USER,
    db_host: env.DB_HOST,
    db_name: env.DB_NAME,
    db_pass: env.DB_PASS,
    db_port: env.DB_PORT
  };
};

