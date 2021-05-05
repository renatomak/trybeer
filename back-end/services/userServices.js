const { checkedEmail, checkedPassword, checkedName, checkedRole } = require('../util');
const { getByEmail, registerUser } = require('../models/userModels');

// const checkedPassword = (password) => {
//   if (password.length < SIZE_PASSWORD) {
//     return true;
//   }
//   return false;
// };

const checkUserExists = async (email) => {
  const checkUser = await getByEmail(email);
  if (checkUser) {
    return true;
  }
  return false;  
};

const loginServices = async (email, password) => {
  if (!checkedEmail(email) || !checkedPassword(password)) { 
    return null;
  }
  const result = await getByEmail(email);
  return result;
};

const validateNewUserData = (name, email, password, role) => {
  if (checkedEmail(email) && checkedPassword(password) && checkedName(name) && checkedRole(role)) {
    return true;
  }
  return false;
};

const registerServices = async (name, email, password, role) => {
  const user = await checkUserExists(email);
  if (validateNewUserData(name, email, password, role) && !user) {
    const newUser = await registerUser(name, email, password, role);
    return newUser;
  }
  return user ? { message: 'Já existe um usuário com esse e-mail' }
    : { message: 'Dados inválidos' };
};

module.exports = {
  loginServices,
  registerServices,
};
