const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    GuardianRouter = require('./controllers/guardians')

    app.use(methodOverride('_method'))
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static(__dirname + '/public'))
    app.use('/guardians/', GuardianRouter)

    app.get('/', (req, res) => {
        res.render('home.ejs')
    })

    app.listen(port, () => {
        console.log(`Server is listening on port: ${port}`)
    })
