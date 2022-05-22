const argon2 = require('argon2');

function getPepper() {
  // get pepper from somewhere here 
  return "this_is_a_very_mysterious_pepper";
}

async function hashPasswordWithSaltAndPepper(password = "", salt = "") {
    try {
      if (!(typeof something === 'string' && typeof salt === 'string'))
        throw new Error("TypeError: passed arguments should be strings");

      const pepper = getPepper();
      const hash = await argon2.hash(salt + pepper + password);

      return hash;
    } catch (error) { console.error(error); }
}
