const blogsRouter = require('express').Router()


blogsRouter.get('/', (req, res) => {
    res.render('blogs/index.ejs')
})

module.exports = blogsRouter