const generateRandomNumber = (max, min = 0) => Math.floor(Math.random() * (max + 1) + min);

const generateSalt = (saltLength) => {
  const salt = [];
  if (saltLength !== 0) {
    const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!?@#$%&^*()[]{}_-+<>";
    for (let index = 0; index < saltLength; index++) {
      salt.push(CHARS[generateRandomNumber(CHARS.length - 1)]);
    }
  }
  return salt.join('');
}

module.exports = { generateSalt };
