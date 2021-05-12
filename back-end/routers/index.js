const express = require('express');
const { login, register, profile } = require('../controllers/userController');
const {
  products,
  images,
  checkout,
  orders,
  saleProducts,
  adminOrders,
  adminOrdersDetails,
} = require('../controllers/productController');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/profile', profile);
router.get('/products', products);
router.get('/images/:imageName', images);
router.post('/checkout', checkout);
router.post('/orders', orders);
router.get('/orders/:id', saleProducts);
router.get('/adminorders', adminOrders);
router.get('/adminorders/:id', adminOrdersDetails);

module.exports = router;