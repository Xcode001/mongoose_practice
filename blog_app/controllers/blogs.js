const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const Author = require('../models/author')

blogsRouter.get('/', async (req, res) => {
    try {
        const allBlogs = await Blog.find({})
        res.render('blogs/index.ejs', {allBlogs})
    } catch(error) {
        console.log("Error", error)
        res.status(404).send("Something Went Wrong")
    }
})

blogsRouter.post('/', (req, res) => {
    Author.findById(req.body.authorId, (err, author) => {
        Blog.create(req.body, (err, blog) => {
            author.blogs.push(blog)
            author.save((err, response) => {
                console.log(response)
                res.redirect('/blogs')
            })
        })
    })
})


blogsRouter.get('/new', async (req, res) => {
    try {
        const allAuthors = await Author.find({})
         res.render('blogs/new.ejs',{allAuthors})
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
})


blogsRouter.get('/:id', (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        Author.findOne({'blogs._id': req.params.id}, (err, author) => {
            res.render('blogs/show.ejs', {
                blog,
                author
            })
        })
    })
})

blogsRouter.delete('/:id', async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id)
        res.redirect('/blogs')
    } catch (error) {
        console.log("Error", error)
        res.status(500).send("Something Went Wrong")
    }
})

blogsRouter.get('/:id/edit', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        res.render('blogs/edit.ejs', {blog})
    } catch (error){
        console.log(error)
        res.status(500).send("Something Went Wrong")
    }
})

blogsRouter.put('/:id', async (req, res) => {
    try {
        await Blog.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/blogs/'+req.params.id)
    } catch (error) {
        console.log("Error", error)
        res.status(500).send("Something Went Wrong")
    }
})

module.exports = blogsRouter