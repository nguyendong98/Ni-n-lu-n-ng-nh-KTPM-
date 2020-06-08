const mongoose = require('mongoose');
const BillSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'customer'
    },
    roomrents: [],
    total_price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
module.exports = Bill = mongoose.model('bill', BillSchema)
