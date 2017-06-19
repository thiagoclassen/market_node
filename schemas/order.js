const mongoose = require('mongoose');
const List = require('./list');

const orderSchema = mongoose.Schema({
    lists: [List],    
    deliveryDate: Date,
    total: float
});

module.exports = mongoose.model('Order', orderSchema);