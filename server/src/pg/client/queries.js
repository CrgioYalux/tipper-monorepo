const CREATE = (
  nickname,
  firstname,
  lastname,
  email,
  hash,
  salt
) => `
  INSERT INTO Client
    (nickname, firstname, lastname, email, hash, salt)
  VALUES
    (${nickname}, ${firstname}, ${lastname}, ${email}, ${hash}, ${salt})
  `;

const DELETE = (id) => `DELETE FROM Client C WHERE C.pk_client_id = ${id}`;

const GET_ONE = (id) => `SELECT * FROM Client C WHERE C.pk_client_id = ${id}`;

module.exports = {
  CLIENT_QUERIES: {
    CREATE,
    DELETE,
    GET_ONE
  }
}
