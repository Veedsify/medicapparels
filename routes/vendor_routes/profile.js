const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('vendor-profile')
})


module.exports = router;