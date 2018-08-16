const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,

    mongoose = require('mongoose'),
    User = require('./models/user'),
    bodyParser = require('body-parser');

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/travel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/userRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);