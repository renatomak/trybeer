const express = require('express');
const { login, register, profile } = require('../controllers/userController');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/profile', profile);

module.exports = router;