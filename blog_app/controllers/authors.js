const authorsController = require('express').Router()


authorsController.get('/', (req, res) => {
    res.render('authors/index.ejs')
})

module.exports = authorsController