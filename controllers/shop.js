const Product = require('../models/product');

exports.getAddProduct =(req, res, next) => {
    res.render('admin/add-product', {
        pageTitle:"Add Product", 
        path: '/admin/add=product',
        formCSS:true,
        productCSS:true,
        activeAddProduct:true,
    });
  } 

  exports.postAddProduct = (req, res, next) => {
    const product = new Product(
      req.body.title,
      req.body.price,
      req.body.description,
      req.body.Image_URL);
    product.save();
    
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products)=>{
    res.render('shop/product-list',
    { prod:products,
      pageTitle:"My Shopes",
      path:'/',
      hasProducts: products.length > 0,
      activeShop:true,
      productCSS:true});    
  });
  // console.log('New Consoling >>> ', products)
}

exports.getCartPage = (req, res, next) => {
  res.render('shop/cart',
  { pageTitle:"My Cart",
    path:'/cart',
  })
}

exports.getAllProducts = (req, res, next) => {
  res.render('shop/index',
  { pageTitle:"Products",
    path:'/products',
  })
}
