const mongoose = require('mongoose');


const KindOfRoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,        
    },  
    image: {
        type: String
    },  
    size: {
        type: Number
    },
    capacity: {
        type: Number,
    },
    bed: {
        type: String
    },
    services: {
        type: [String]
    },
    text: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = KindOfRoom = mongoose.model('kindofroom', KindOfRoomSchema)