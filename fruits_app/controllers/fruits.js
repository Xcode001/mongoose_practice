const fruitsRouter =  require('express').Router()

fruitsRouter.get('/', (req, res) => {
    res.render('index.ejs')
})

module.exports = fruitsRouter