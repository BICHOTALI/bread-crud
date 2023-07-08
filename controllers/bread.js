const router = require('express').Router()
const Bread = require('../models/bread')

// GET all bread
router.get('/', (req, res) => {
    res.render('index', { breads: Bread })
})

// GET bread by index
router.get('/:index', (req, res) => {
    const { index } = req.params
    res.send(Bread[index])
})

module.exports = router