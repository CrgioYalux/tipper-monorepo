const argon2 = require('argon2');

function hashPasswordWithSaltAndPepper(password = "", salt = "", pepper = "") {
  return new Promise((resolve, reject) => {
    if (!password) reject("No password passed");
    (async () => {
      const toBeHashed = password + salt + pepper;
      const hash = await argon2.hash(toBeHashed);
      resolve(hash);
    })();
  });
}

function checkIfMatches(hash, check) {
  return new Promise(async (resolve, reject) => {
    if (!hash || !check) reject("there's empty required arguments");
    resolve(await argon2.verify(hash, check))
  });
}

module.exports = { hashPasswordWithSaltAndPepper, checkIfMatches };
