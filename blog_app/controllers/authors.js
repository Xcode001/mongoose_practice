const authorsController = require('express').Router()
const Author = require('../models/author')

authorsController.get('/', async (req, res) => {
    try {
        const allAuthors = await Author.find({})
        res.render('authors/index.ejs', {allAuthors})
    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong")
    }
})

authorsController.post('/', async (req, res) => {
    try {
        await Author.create(req.body)
        res.redirect('/authors')
    } catch (error) {
        console.log("Error", error)
        res.send("Something Went Wrong")
    }
})

authorsController.get('/new', (req, res) => {
    res.render('authors/new.ejs')
})
module.exports = authorsController