const fruitsRouter =  require('express').Router()
const Fruit = require('../models/fruit')

fruitsRouter.get('/', (req, res) => {
    Fruit.find({}, (error, fruits) => {
        if(error) {
            res.send(error)
        } else {
            res.render('index.ejs', {fruits})
        }
    })
})

fruitsRouter.get('/new', (req, res) => {
    res.render('new.ejs')
})

fruitsRouter.get('/:id/edit', (req, res) => {
    Fruit.findById(req.params.id, (error, fruit) => {
        if(error){
            res.send(error)
        } else {
            res.render('edit.ejs', {fruit})
        }
    })
})

fruitsRouter.post('/', (req, res) => {
    const newFruit = req.body
    if (newFruit.readyToEat === 'on') {
        newFruit.readyToEat = true
    } else {
        newFruit.readyToEat = false
    }
    Fruit.create(newFruit, (error, response) => {
        if(error){
            res.send(error)
        } else {
            console.log(response)
            res.redirect('/fruits')
        }
    })
})
fruitsRouter.get('/:id', (req, res) => {
    Fruit.findById(req.params.id, (error, fruit) => {
        if(error){
            res.send(error)
        } else {
            res.render('show.ejs', {fruit})
        }
    })
})
fruitsRouter.put('/:id', (req, res) => {
    const updatedFruit = req.body
        if (updatedFruit.readyToEat === 'on') {
            updatedFruit.readyToEat = true
        } else {
            updatedFruit.readyToEat = false
        }
    Fruit.findByIdAndUpdate(req.params.id, updatedFruit, {new: true}, (error, response) => {
        if(error){
            console.log(error)
            res.send(error)
        } else {
            console.log(response)
            res.redirect('/fruits/' + req.params.id)
        }
    })
})

fruitsRouter.delete('/:id', (req, res) => {
    Fruit.findByIdAndDelete(req.params.id, (error) => {
        if(error){
            res.send(error)
        } else {
            res.redirect('/fruits')
        }
    })
})

module.exports = fruitsRouter