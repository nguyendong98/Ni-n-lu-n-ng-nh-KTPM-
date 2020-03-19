const mongoose = require('mongoose');
const CustomerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    identitycard: {
        type: String,
        required: true
    },
    count: {
        type: Number
    }

})
module.exports = Customer = mongoose.model('customer', CustomerSchema)