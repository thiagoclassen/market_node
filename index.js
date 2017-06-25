const express = require('express'),
    app = express(),
    connClose = require('./middleware/connection-closed'),
    mongoose = require('mongoose');

// Loading the routes
const clients = require('./routes/clients'),
    lists = require('./routes/lists'),
    orders = require('./routes/orders'),
    products = require('./routes/products'),
    users = require('./routes/users');

// Mongoose connecting to MongoDB
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => {
    console.log('Connected to MongoDB!');
});

// Setting Middleware and routes

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(connClose);
app.use('/clients', clients);
app.use('/lists', lists);
app.use('/orders', orders);
app.use('/products', products);
app.use('/users', users);


// Starting server
app.listen(3000, () => {
    console.log('listening on 3000');
})

//curl -H "Content-Type: application/json" -X POST -d '{}' http://localhost:3000/users