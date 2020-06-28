const mongoose = require('mongoose');
const CheckoutSchema = new mongoose.Schema({
  bill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'bill',
  },
  totalprice: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Checkout = mongoose.model('checkout', CheckoutSchema);
