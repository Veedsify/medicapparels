const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('blog')
})

router.get('/:article', (req, res)=>{

    res.render('blog-details')
})


module.exports = router