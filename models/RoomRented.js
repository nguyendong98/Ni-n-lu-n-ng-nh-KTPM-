const mongoose = require('mongoose')
const RoomRentedSchema = new mongoose.Schema({    
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'room'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    datecheckin: {
        type: Date,
        required: true
    },
    datecheckout: {
        type: Date,
        required:true
    },       
    identitycard: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Đang chờ duyệt'
    },
    nationality: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now 
    }

})
module.exports = RoomRented = mongoose.model('roomrented', RoomRentedSchema)