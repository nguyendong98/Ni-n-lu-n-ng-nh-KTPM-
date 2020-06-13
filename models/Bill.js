const mongoose = require('mongoose');
const BillSchema = new mongoose.Schema({
    roomrent_id: String,
    customer: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'customers'
    },
    roomrents: [],
    totalPriceNotDisCount: {
        type: Number
    },
    total_price: {
        type: Number
    },
    discount: Number,
    date: {
        type: Date,
        default: Date.now()
    }
})
module.exports = Bill = mongoose.model('bill', BillSchema)
