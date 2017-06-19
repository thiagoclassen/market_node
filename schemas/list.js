const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Product = require('./product').Schema,
    Client = require('./client').Schema;


const listSchema = new Schema({
    client: Client,
    products: [Product],
    deliveryDate: Date,
    total: Number
});

const model = mongoose.model('List', listSchema);

module.exports = {
    Schema: listSchema,
    Model: model
}