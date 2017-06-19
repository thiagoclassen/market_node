const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    type: String
});

const model = mongoose.model('Product', productSchema);

module.exports = {
    Schema: productSchema,
    Model: model
}