const BASE_API_TIP = "/api/tip";
const BASE_API_USER = "/api/user";

const ROUTES_TIPPER = {
  GET_ALL : `${BASE_API_TIP}/get/all`,
  GET_ONE : `${BASE_API_TIP}/get/:id`,
  CREATE : `${BASE_API_TIP}/post`,
  UPDATE : `${BASE_API_TIP}/put`,
  DELETE: `${BASE_API_TIP}/delete/:id`
};

const ROUTES_USERS = {
  GET_ALL : `${BASE_API_USER}/get/all`,
  GET_ONE : `${BASE_API_USER}/get/:id`,
  CREATE : `${BASE_API_USER}/post`,
  UPDATE : `${BASE_API_USER}/put/:id`,
  DELETE : `${BASE_API_USER}/delete/:user`
};

module.exports = {
  BASE_API_TIP,
  BASE_API_USER,
  ROUTES_TIP,
  ROUTES_USER 
};
