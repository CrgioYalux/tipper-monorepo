function checkParams(params = []) {
  for (let index = 0; index < params.length; index++) {
    if (typeof params[index] === 'undefined') return false;
    if (typeof params[index] !== 'string') return false;
    if (params[index].length === 0) return false
  }
  return true;
}

module.exports = { checkParams };
