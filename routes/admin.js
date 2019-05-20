
const express =require("express")
const path = require('path');

const router= express.Router();

const productsController = require('../controllers/product')



console.log(productsController.postAddProduct);

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POSTdds
router.post('/add-product', productsController.postAddProduct );

module.exports = router;
