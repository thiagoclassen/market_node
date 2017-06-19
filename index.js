const express = require('express'),
    app = express(),
    mongoose = require('mongoose');

// Mongoose connecting to MongoDB
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => {
    console.log('Connected to MongoDB!');
});

// Setting the routes
const clients = require('./routes/clients'),
    lists = require('./routes/lists'),
    orders = require('./routes/orders'),
    products = require('./routes/lists'),
    users = require('./routes/users');

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