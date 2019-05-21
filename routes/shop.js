const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop')

const router = express.Router();

// console.log(productsController)

router.get('/', shopController.getProducts);

router.get('/cart', shopController.getCartPage);

router.get('/products', shopController.getAllProducts);

router.get('/checkout');


module.exports = router;
