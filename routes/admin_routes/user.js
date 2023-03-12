const express = require('express')
const router = express.Router()

router.get('/',(req, res, next)=>{
    res.render('admin/users')
})

router.get('/roles',(req, res)=>{
    res.render('admin/roles')
})
module.exports = router