// create web server

// import modules
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const Comment = require('./models/comment')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const commentsRoutes = require('./routes/comments')

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/comment2', { useNewUrlParser: true })

// set up template engine
app.set('view engine', 'ejs')

// set up static files
app.use(express.static('public'))

// set up body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set up method-override
app.use(methodOverride('_method'))

// set up routes
app.use(commentsRoutes)

// listen to port
app.listen(port, () => console.log(`Server is running on port ${port}`))
