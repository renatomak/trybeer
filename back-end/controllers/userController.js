const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const { loginServices } = require('../services/userServices');

const {
  OK_200,
  UNAUTHORIZED_401,
  SECRET } = require('../util');

const login = rescue(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginServices(email, password);
    if (user === null) {
      throw new Error();
    }
    const { name, role } = user;
    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: email, role }, SECRET, jwtConfig);
    const result = { name, email, role, token };
    res.status(OK_200).json(result);
  } catch (err) {
    console.error(err.message);
    res.status(UNAUTHORIZED_401).send({ message: 'Incorrect username or password' });
  }
});

module.exports = {
  login,
};