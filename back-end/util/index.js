const SIZE_MIN_NAME = 12;
const SIZE_PASSWORD = 6;
const ZERO = 0;
const OK_200 = 200;
const CREATED_201 = 201;
const NO_CONTENT_204 = 204;
const BAD_REQUEST_400 = 400;
const UNAUTHORIZED_401 = 401;
const NOT_FOUND_404 = 404;
const CONFLICT_409 = 409; 
const UNPROCESSABLE_ENTITY_422 = 422;
const CODE_ERROR = 'invalid_data';
const NOT_FOUND = 'not_found';
const SECRET = 'tokensecreto';

const checkedEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

const checkedPassword = (password) => {
  if (password.length < SIZE_PASSWORD) {
    return false;
  }
  return true;
};

const checkedName = (name) => {
  const regex = /^[a-zA-Z\s]*$/;
  if (name.length < SIZE_MIN_NAME || !regex.test(name)) {
    return false;
  }
  return true;
};

const checkedRole = (role) => {  
  if (role === 'administrator' || role === 'client') {
    return true;
  }
  return false;
};

module.exports = {
  SIZE_MIN_NAME,
  SIZE_PASSWORD,
  ZERO,
  OK_200,
  CREATED_201,
  NO_CONTENT_204,
  BAD_REQUEST_400,
  UNAUTHORIZED_401,
  NOT_FOUND_404,
  CONFLICT_409,
  UNPROCESSABLE_ENTITY_422,
  CODE_ERROR,
  NOT_FOUND,
  checkedEmail,
  checkedPassword,
  checkedName,
  checkedRole,
  SECRET,
};
