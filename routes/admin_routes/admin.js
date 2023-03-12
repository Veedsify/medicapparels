const express = require('express');
const router = express.Router();
const loginRouter = require('./login')
const registerRouter = require('./register')
const productsRouter = require('./products')
const blogRouter = require('./blog')
const profileRouter = require('./profile')
const configurationRouter = require('./configuration')
const path = require('path')


router.use('/login', loginRouter)
router.use('/register', registerRouter)
router.use('/product', productsRouter)
router.use('/blog', blogRouter)
router.use('/profile', profileRouter)
router.use('/configuration', configurationRouter)

router.get('/',(req,res)=>{
    res.render('admin/index')
})


module.exports = router;  