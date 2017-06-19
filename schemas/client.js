const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: String
});

const model = mongoose.model('Client', clientSchema);

module.exports = {
    Schema: clientSchema,
    Model: model
}