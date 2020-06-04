const mongoose = require('mongoose');
const CustomerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    phone: {
        type: String,
        required: true
    },
    
    identitycard: {
        type: String,
        required: true
    },
    count: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }

})
module.exports = Customer = mongoose.model('customer', CustomerSchema)
