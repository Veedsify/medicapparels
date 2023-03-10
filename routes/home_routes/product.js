const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('product')
})

router.get('/compare',(req,res)=>{
    res.render('compare')
})

router.get('/cart',(req,res)=>{
    res.render('cart')
})


module.exports = router