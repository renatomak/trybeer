const express = require('express');
// const multer = require('multer');
const { login, register, profile } = require('../controllers/userController');
const {
  products,
  images,
  checkout,
  orders,
  saleProducts,
  adminOrders,
} = require('../controllers/productController');


const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, 'images');
//   },
// });
// const upload = multer({ storage });

router.post('/login', login);
router.post('/register', register);
router.post('/profile', profile);
router.get('/products', products);
router.get('/images/:imageName', images);
router.post('/checkout', checkout);
router.post('/orders', orders);
router.get('/orders/:id', saleProducts);
router.get('/adminorders', adminOrders);


module.exports = router;