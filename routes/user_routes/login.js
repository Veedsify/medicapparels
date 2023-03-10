const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('user/login')
})

router.get('/forgot',(req,res)=>{
    res.render('user/forget_pwd')
})


module.exports = router