const GET_ALL_FROM_CLIENT_ID = `
  SELECT 
    C.pk_client_id AS client_id,
    T.pk_tip_id AS tip_id,
    T.body AS body,
    C.fullname AS fullname,
    C.nickname AS nickname,
    T.created AS created
  FROM Tip T
  JOIN Client C
  ON 
    T.fk_client_id = C.pk_client_id
  WHERE
    C.pk_client_id = $1
`;

const GET_ALL_FROM_CLIENT_NICKNAME = `
  SELECT 
    C.pk_client_id AS client_id,
    T.pk_tip_id AS tip_id,
    T.body AS body,
    C.fullname AS fullname,
    C.nickname AS nickname,
    T.created AS created
  FROM Tip T
  JOIN Client C
  ON
    T.fk_client_id = C.pk_client_id
  WHERE
    C.nickname = $1
`;

const GET_ONE_FROM_CLIENT_ID = `
  SELECT 
    C.pk_client_id AS client_id,
    T.pk_tip_id AS tip_id,
    T.body AS body,
    C.fullname AS fullname,
    C.nickname AS nickname,
    T.created AS created
  FROM Tip T
  JOIN Client C
  ON 
    T.fk_client_id = C.pk_client_id
  WHERE 
    C.pk_client_id = $1
    AND
    T.pk_tip_id = $2
`;

const GET_ONE_FROM_CLIENT_NICKNAME = `
  SELECT 
    C.pk_client_id AS client_id,
    T.pk_tip_id AS tip_id,
    T.body AS body,
    C.fullname AS fullname,
    C.nickname AS nickname,
    T.created AS created
  FROM Tip T
  JOIN Client C
  ON 
    T.fk_client_id = C.pk_client_id
  WHERE 
    C.nickname = $1
    AND
    T.pk_tip_id = $2
`;

const POST = `
  INSERT INTO TIP
    (fk_client_id, body)
  VALUES
    ($1, $2)
  RETURNING
    pk_tip_id AS tip_id,
    fk_client_id AS client_id,
    body,
    created
`;

const DELETE = `
  DELETE FROM TIP T
  WHERE
    T.fk_client_id = $1
    AND
    T.pk_tip_id = $2
  RETURNING
  pk_tip_id AS tip_id,
  fk_client_id AS client_id,
  created,
  CURRENT_TIMESTAMP as deleted
`;

module.exports = {
  TIP_QUERIES: {
    GET_ALL_FROM_CLIENT_ID,
    GET_ALL_FROM_CLIENT_NICKNAME,
    GET_ONE_FROM_CLIENT_ID,
    GET_ONE_FROM_CLIENT_NICKNAME,
    POST,
    DELETE
  }
}
