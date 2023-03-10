const express = require('express');
const router = express.Router();
const blog = require('./blog');
const about = require('./about');
const shop = require('./shop');
const contact = require('./contact');
const checkout = require('./checkout');
const order = require('./order');
const wishlist = require('./wishlist');
const search = require('./search');
const product = require('./product');
const collection = require('./collection');
const category = require('./category');


// Initialize Routes

router.use('/blog', blog)
router.use('/about', about)
router.use('/shop', shop)
router.use('/contact', contact)
router.use('/checkout', checkout)
router.use('/order', order)
router.use('/wishlist', wishlist)
router.use('/search', search)
router.use('/product', product)
router.use('/collection', collection)
router.use('/category', category)

router.get('/',(req,res)=>{
    res.render('index')
})


module.exports = router;  