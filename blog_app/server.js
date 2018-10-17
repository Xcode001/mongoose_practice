const express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    blogsRouter = require('./controllers/blogs'),
    authorsRouter = require('./controllers/authors'),
    authController = require('./controllers/auth')


    app.use(methodOverride('_method'))
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static(__dirname + '/public/'))
    app.use('/blogs', blogsRouter)
    app.use('/authors', authorsRouter)
    app.use('/auth', authController)
    app.use(session({
        secret: 'phoenix',
        resave: false,
        saveUninitialized: false
    }))
    app.get('/', (req, res) => {
        res.render('index.ejs')
    })
    app.get('*', (req, res) => {
        res.status(404).render('404.ejs')
    })

    app.listen(port, () => {
        console.log(`Server is listening at port: ${port}`)
    })