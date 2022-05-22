const GET_ALL = (client_id) => `SELECT * FROM TIP T WHERE T.fk_client_id = ${client_id}`;
const GET_ONE = (id) => `SELECT * FROM TIP T WHERE T.pk_tip_id = ${id}`;
const CREATE = (client_id, body) => `INSERT INTO TIP (fk_client_id, body) VALUES (${client_id},${body})`;
const DELETE = (id) => `DELETE FROM TIP T WHERE T.pk_tip_id = ${id}`;

module.exports = {
  TIP_QUERIES: {
    GET_ALL,
    GET_ONE,
    CREATE,
    DELETE
  }
}
