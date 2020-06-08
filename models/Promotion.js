const mongoose = require('mongoose');

const PromotionSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    }
})


