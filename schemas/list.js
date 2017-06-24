const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Product = require('./product').Schema,
    Client = require('./client').Schema;


const listSchema = new Schema({
    client: { name: String },
    products: [{
        name: String,
        type: String,
        price: Number,
        qtd: Number,
        total: Number
    }],
    deliveryDate: Date,
    total: Number
});

const model = mongoose.model('List', listSchema);

module.exports = {
    Schema: listSchema,
    Model: model
}