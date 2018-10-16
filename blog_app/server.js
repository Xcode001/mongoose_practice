const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    blogsRouter = require('./controllers/blogs'),
    authorsRouter = require('./controllers/authors')


    app.use(methodOverride('_method'))
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static(__dirname + '/public/'))
    app.use('/blogs', blogsRouter)
    app.use('/authors', authorsRouter)

    app.get('/', (req, res) => {
        res.render('index.ejs')
    })
    app.get('*', (req, res) => {
        res.status(404).render('404.ejs')
    })

    app.listen(port, () => {
        console.log(`Server is listening at port: ${port}`)
    })