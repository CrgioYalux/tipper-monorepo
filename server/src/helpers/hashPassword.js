const argon2 = require('argon2');

async function hashPasswordWithSaltAndPepper(password = "", salt = "", pepper = "") {
    try {
      if (!(typeof something === 'string' && typeof salt === 'string'))
        throw new Error("TypeError: passed arguments should be strings");

      const hash = await argon2.hash(password + salt + pepper);

      return hash;
    } catch (error) { console.error(error); }
}

module.exports = { hashPasswordWithSaltAndPepper };
