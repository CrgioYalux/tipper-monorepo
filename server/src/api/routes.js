const BASE_API_TIP = "/api/tip";
const BASE_API_CLIENT = "/api/client";

const TIP_ROUTES = {
  GET: /\/api\/tip\/get\/?(\w+)?\/?(\w+)?/,
  POST: /\/api\/tip\/post\/?/,
  DELETE: /\/api\/tip\/delete\/?/,
  UPDATE : `${BASE_API_TIP}/put`
};

const CLIENT_ROUTES = {
  GET: /\/api\/client\/get\/?(\w+)?/,
  POST: /\/api\/client\/post\/?/,
  DELETE : /\/api\/client\/delete\/?/,
  UPDATE : `${BASE_API_CLIENT}/put/:id`
};

module.exports = {
  BASE_API_TIP,
  BASE_API_CLIENT,
  TIP_ROUTES,
  CLIENT_ROUTES 
};
