const BASE_API_TIP = "/api/tip";
const BASE_API_CLIENT = "/api/client";

const TIP_ROUTES = {
  GET_ALL : `${BASE_API_TIP}/get/all/:client_id`,
  GET_ONE : `${BASE_API_TIP}/get/:client_id/:tip_id`,
  CREATE : `${BASE_API_TIP}/post`,
  UPDATE : `${BASE_API_TIP}/put`,
  DELETE: `${BASE_API_TIP}/delete/:id`
};

const CLIENT_ROUTES = {
  GET_ALL : `${BASE_API_CLIENT}/get/all`,
  GET_ONE : `${BASE_API_CLIENT}/get/:id`,
  CREATE : `${BASE_API_CLIENT}/post`,
  UPDATE : `${BASE_API_CLIENT}/put/:id`,
  DELETE : `${BASE_API_CLIENT}/delete/:id`
};

module.exports = {
  BASE_API_TIP,
  BASE_API_CLIENT,
  TIP_ROUTES,
  CLIENT_ROUTES 
};
