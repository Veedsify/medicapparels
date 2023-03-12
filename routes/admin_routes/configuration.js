const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.render('admin/product')
})
router.get('/servers',(req, res)=>{
    res.render('admin/configure-servers')
})
router.get('/email',(req, res)=>{
    res.render("admin/configure-email");
})

module.exports = router