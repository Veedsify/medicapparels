const express = require('express');
const router = express.Router();


router.get('/successful',(req,res)=>{
    res.render('order-success')
})

router.get('/track',(req,res)=>{
    res.render('order-tracking')
})

router.get('/cart',(req,res)=>{
    res.render('cart')
})


module.exports = router