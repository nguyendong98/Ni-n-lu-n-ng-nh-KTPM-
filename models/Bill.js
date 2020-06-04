const mongoose = require('mongoose');
const BillSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'customer'
    },
    roomrented: [],
    total_price: {
        type: Number,
        required: true
    },
    date: {
        default: Date.now()
    }
})
module.exports = Bill = mongoose.model('bill', BillSchema)
