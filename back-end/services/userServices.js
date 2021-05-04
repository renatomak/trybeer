const { SIZE_PASSWORD, checkedEmail } = require('../util');
const { getByEmail } = require('../models/userModels');

const checkedPassword = (password) => {
  if (password.length < SIZE_PASSWORD) {
    return true;
  }
  return false;
};

const loginServices = async (email, password) => {
  if (!checkedEmail(email) || checkedPassword(password)) {
    return null;
  }
  const result = await getByEmail(email);
  return result;
};

module.exports = {
  loginServices,
};
