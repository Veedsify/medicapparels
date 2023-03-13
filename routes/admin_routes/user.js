const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('admin/users')
})

router.get('/roles', (req, res) => {
    res.render('admin/roles')
})

router.get('/vendors', (req, res) => {
    res.render('admin/vendors')
})


router.post('/get-data', (req, res) => {
    res.json({
        fullname: 'Dan Morris',
        image: '/IMAGES/test.jpg'
    })
})

router.post('/update', (req, res) => {
    res.redirect('/admin/user?updated=true&role=admin')
})
module.exports = router