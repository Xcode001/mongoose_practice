const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    fruitsController = require('./controllers/fruits'),
    methodOverride = require('method-override')

    require('./db/db')
    
    app.set('view engine', 'ejs')
    app.use(methodOverride('_method'))
    app.use(bodyParser.urlencoded({extended: true}))
    app.use('/fruits', fruitsController)
    app.use(express.static(__dirname + '/public'))

    app.get('/', (req, res) => {
        res.render('home.ejs')
    })


    app.listen(port, () => {console.log(`Server is listening on port ${port}`)})

