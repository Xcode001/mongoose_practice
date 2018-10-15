const authorsController = require('express').Router()
const Author = require('../models/author')

authorsController.get('/', async (req, res) => {
    try {
        const allAuthors = await Author.find({})
        res.render('authors/index.ejs', {allAuthors})
    } catch (error) {
        console.log("Error", error)
        res.status(404).send("Something Went Wrong - Author Not Found")
    }
})

authorsController.post('/', async (req, res) => {
    try {
        await Author.create(req.body)
        res.redirect('/authors')
    } catch (error) {
        console.log("Error", error)
        res.status(500).send("Something Went Wrong")
    }
})

authorsController.get('/new', (req, res) => {
    res.render('authors/new.ejs')
})

authorsController.get('/:id/edit', async (req, res) => {
    try {
        const author = await Author.findById(req.params.id)
        res.render('authors/edit.ejs', {author})
    } catch (error) {
        console.log("Error", error)
        res.status(500).send("Something Went Wrong")
    }
})

authorsController.get('/:id', async (req, res) => {
    try {
        const author = await Author.findById(req.params.id)
        res.render('authors/show.ejs', {author})
    } catch (error) {
        console.log("Error", error)
        res.status(404).send("Something Went Wrong, Author Not Found")
    }
})

authorsController.put('/:id', async (req, res) => {
    try {
        await Author.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/authors/' + req.params.id)
    } catch (error) {
        console.log("Error", error)
        res.status(500).send("Something Went Wrong")
    }
})

authorsController.delete('/:id', async (req, res) => {
    try {
        await Author.findByIdAndDelete(req.params.id)
        res.redirect('/authors')
    } catch (error) {
        console.log("Error", error)
        res.status(500).send("Something Went Wrong")
    }
})
module.exports = authorsController