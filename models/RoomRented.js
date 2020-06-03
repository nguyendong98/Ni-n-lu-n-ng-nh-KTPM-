const mongoose = require('mongoose');
const RoomRentedSchema = new mongoose.Schema({
  roomrents: [
    {
      id_kindOfRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'kindofroom'
      },
      price: {
        type: Number
      },
      quantity: {
        type: Number
      }
    }
  ],
  roomrent_detail: {
    type: Array
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  datecheckin: {
    type: Date,
    required: true,
  },
  datecheckout: {
    type: Date,
    required: true,
  },
  identitycard: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'not_approve',
  },
  nationality: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = RoomRented = mongoose.model('roomrented', RoomRentedSchema);
