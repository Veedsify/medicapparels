const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.render('admin/product')
})
router.get('/payment',(req, res)=>{
    res.render('admin/configure-payments')
})
router.get('/email',(req, res)=>{
    res.render("admin/configure-email");
})

module.exports = router