const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('admin/users')
})

router.get('/roles', (req, res) => {
    res.render('admin/roles')
})


router.post('/get-data', (req, res) => {
    res.json({
        fullname: 'Dan Morris',
        image: '/IMAGES/test.jpg'
    })
})
module.exports = router