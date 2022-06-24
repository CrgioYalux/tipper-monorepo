const POST = `
  INSERT INTO Client
    (nickname, fullname, email, hash, salt)
  VALUES
    ($1, $2, $3, $4, $5)
  RETURNING 
    nickname,
    fullname,
    email,
    created,
    pk_client_id AS client_id
`;

const DELETE = `
  DELETE FROM Client C
  WHERE
    C.pk_client_id = $1
    AND
    C.hash = $2   
  RETURNING
    C.nickname as nickname,
    C.fullname as fullname,
    C.email as email,
    C.created as created,
    CURRENT_TIMESTAMP as deleted,
    C.pk_client_id as client_id
`;

const GET_ONE_FROM_ID = `
  SELECT
    C.nickname AS nickname,
    C.fullname AS fullname,
    C.email AS email,
    C.created AS created,
    C.pk_client_id AS client_id
  FROM Client C
  WHERE
    C.pk_client_id = $1
`;

const GET_ONE_FROM_NICKNAME = `
  SELECT
    C.nickname AS nickname,
    C.fullname AS fullname,
    C.email AS email,
    C.created AS created,
    C.pk_client_id AS client_id
  FROM Client C
  WHERE
    C.nickname = $1
`;

const GET_ALL = `
  SELECT
    C.nickname AS nickname,
    C.fullname AS fullname,
    C.email AS email,
    C.created AS created,
    C.pk_client_id AS client_id
  FROM Client C
`;

const GET_SALT_FROM_ID = `
  SELECT
    C.salt AS salt,
    C.pk_client_id AS client_id,
    C.hash AS hash
  FROM Client C
  WHERE
    C.pk_client_id = $1
`;

const GET_SALT_FROM_NICKNAME = `
  SELECT
    C.salt AS salt,
    C.pk_client_id AS client_id,
    C.hash AS hash
  FROM Client C
  WHERE
    C.nickname = $1
`;

module.exports = {
  CLIENT_QUERIES: {
    GET_ALL,
    GET_ONE_FROM_ID,
    GET_ONE_FROM_NICKNAME,
    GET_SALT_FROM_ID,
    GET_SALT_FROM_NICKNAME,
    POST,
    DELETE
  }
}
