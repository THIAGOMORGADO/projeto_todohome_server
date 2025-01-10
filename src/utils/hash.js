const bcrypt = require("bcrypt");

async function hashpass(password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log(hashedPassword);

  return hashedPassword;
}

module.exports = hashpass;
