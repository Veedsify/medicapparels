const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('user/register')
})


module.exports = router