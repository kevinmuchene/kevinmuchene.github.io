const express = require('express');
const controller = require('../controllers/product');

const router = express.Router();

router.get('/', controller.getRandomProduct);
router.post('/addToCart', controller.addToCart);
router.get('/cart', controller.getCart);

module.exports = router;
