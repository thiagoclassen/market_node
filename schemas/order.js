const mongoose = require('mongoose');
const List = require('./list').Schema;

const orderSchema = mongoose.Schema({
    lists: [List],    
    deliveryDate: Date,
    total: Number
});

module.exports = mongoose.model('Order', orderSchema);