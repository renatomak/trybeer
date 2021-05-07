const express = require('express');
// const multer = require('multer');
const { login, register, profile } = require('../controllers/userController');
const { products, images } = require('../controllers/productController');

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

module.exports = router;