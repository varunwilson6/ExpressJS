const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  console.log(products);
  
  res.render('shop', {prod:products, pageTitle:"My Shopes", path:'/', hasProducts: products.length > 0});
});

module.exports = router;
