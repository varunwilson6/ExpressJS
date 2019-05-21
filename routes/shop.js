const path = require('path');

const express = require('express');

const productsController = require('../controllers/product')

const router = express.Router();

// console.log(productsController)

router.get('/', productsController.getProducts);

module.exports = router;
