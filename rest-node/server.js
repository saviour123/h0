// dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/productsdb');

// express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// routes
app.use('/api', require('./routes/api'));

// start server
app.listen(3000);
console.log('API is running on port 3000');
