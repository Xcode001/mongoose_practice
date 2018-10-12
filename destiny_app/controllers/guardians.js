const guardianRouter = require('express').Router(),
    Guardian = require('../models/guardian')


guardianRouter.get('/', (req, res) => {
    Guardian.find({}, (error, guardians) => {
        if(error){
            console.log(error)
            res.status(500).send('Something Went Wrong')
        } else {
            res.render('index.ejs', {guardians})
        }
    })
})

guardianRouter.post('/', (req, res) => {
    Guardian.create(req.body, (error, newGuardian) => {
        if(error){
            console.log(error)
            res.status(500).send('Something Went Wrong')
        } else {
            console.log(newGuardian)
            res.redirect('/guardians')
        }
    })
})

guardianRouter.get('/new', (req, res) => {
    res.render('new.ejs')
})

guardianRouter.get('/:id', (req, res) => {
    Guardian.findById(req.params.id, (error, guardian) => {
        if(error){
            console.log(error)
            res.status(500).send('Something Went Wrong')
        } else {
            res.render('show.ejs', {guardian})
        }
    })
})

module.exports = guardianRouter