const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser')
    fruitsController = require('./controllers/fruits')
    
    app.use(bodyParser.urlencoded({extended: true}))
    app.use('/fruits', fruitsController)

    app.get('/', (req, res) => {
        res.render('home.ejs')
    })


    app.listen(port, () => {console.log(`Server is listening on port ${port}`)})

