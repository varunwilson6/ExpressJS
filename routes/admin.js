
const express =require("express")
const path = require('path');

const router= express.Router();

const adminController = require('../controllers/admin')


// console.log('new Console >>>>>',productsController);

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POSTdds
router.post('/add-product', adminController.postAddProduct );

// /admin/products => GET
router.get('/products')

module.exports = router;
