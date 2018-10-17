const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const Author = require('../models/author')

blogsRouter.get('/', async (req, res) => {
    try {
        const allBlogs = await Blog.find()
        res.render('blogs/index.ejs', {
            allBlogs
        })
    } catch(error) {
        console.log(error)
        res.status(404).send("404 Resource Not Found")
    }
})

blogsRouter.post('/', async (req, res) => {
    try {
        const blog = await Blog.create(req.body)
        await Author.findByIdAndUpdate({
            "_id": blog.authorId
        },{
            $push: {blogs: blog
            }
        })
        res.redirect('/blogs')
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
})


blogsRouter.get('/new', async (req, res) => {
    try {
        const allAuthors = await Author.find()
         res.render('blogs/new.ejs', {
             allAuthors
        })
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
})


blogsRouter.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        const author = await Author.findById(blog.authorId)
        res.render('blogs/show.ejs', {
            blog, author
        })
    } catch (error) {
        console.log(error)
        res.status(500).send("Somthing Went Wrong")
    }
})

blogsRouter.delete('/:id', async (req, res) => {
    try {
        const blogToDelete = await Blog.findByIdAndDelete(req.params.id)
        await Author.findByIdAndUpdate(blogToDelete.authorId, {
            $pull : { 
                blogs : { 
                    _id: req.params.id
                }}
        })
        res.redirect('/blogs')
    } catch(error){
       console.log(error)
       res.status(500).send("Something Went Wrong")
    }
})

blogsRouter.get('/:id/edit', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        res.render('blogs/edit.ejs', {
            blog
        })
    } catch (error){
        console.log(error)
        res.status(500).send("Something Went Wrong")
    }
})


blogsRouter.put('/:id', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { 
            new: true
        })
        await Author.findOneAndUpdate({
            "_id": blog.authorId,
            "blogs._id": req.params.id
        },{
            "$set":{
                "blogs.$": blog
            }
        })
        res.redirect('/blogs/' + req.params.id)
    } catch (error) {
        console.log(error)
        res.status(500).send("Something Went Wrong")
    }
})

module.exports = blogsRouter

