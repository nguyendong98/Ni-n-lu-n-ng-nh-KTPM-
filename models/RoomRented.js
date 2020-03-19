const mongoose = require('mongoose')
const RoomRentedSchema = new mongoose.Schema({    
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'room'
    },
    datecheckin: {
        type: Date,
        required: true
    },
    datecheckout: {
        type: Date,
        required:true
    },
    customername: {
        type: String,
        required: true
    },    
    identitycard: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nationality: {
        type: String
    }

})
module.exports = RoomRented = mongoose.model('roomrented', RoomRentedSchema)