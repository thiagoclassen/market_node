const mongoose = require('mongoose');
const Product = require('./product');
const Client = require('./client');

const listSchema = mongoose.Schema({
    client: Client,
    products: [Product],
    deliveryDate: Date,
    total: float
});

module.exports = mongoose.model('List', listSchema);