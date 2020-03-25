const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    kind: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'kindofroom'
    },
    status: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now

    }
})
module.exports = Room = mongoose.model('room', RoomSchema)