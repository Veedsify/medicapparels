const express = require('express');
const router = express.Router();
const profile = require('./profile')
const dashboard = require('./dashboard')


// Initialize Routes
router.use('/profile', profile)
router.use('/dashboard', dashboard)

router.get('/', (req, res, next)=>{
    res.redirect('/')
})

module.exports = router