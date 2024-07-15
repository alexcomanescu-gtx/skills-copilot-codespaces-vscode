// create web server
// load express module
const express = require('express')
const app = express()
// load body-parser module
const bodyParser = require('body-parser')
// load mongoose module
const mongoose = require('mongoose')
// load Comment model
const Comment = require('./models/comment')

// connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true })

// set up body-parser
app.use(bodyParser.json())