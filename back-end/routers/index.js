const express = require('express');
const { login, register, profile } = require('../controllers/userController');
const { products } = require('../controllers/productController');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/profile', profile);
router.get('/products', products);

module.exports = router;