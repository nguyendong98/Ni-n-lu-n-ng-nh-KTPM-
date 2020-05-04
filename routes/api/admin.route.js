const express = require('express');
const router = express.Router();
const Room = require('./../../models/Room');
const RoomRented = require('./../../models/RoomRented');
const admin = require('./../../middleware/admin');

// @route   GET api/admin/:id
// @access  Private/admin

router.put('/:id', admin, async (req, res) => {
  try {
    const id = req.params.id;
    
    const roomRent = await RoomRented.findById(id);
    const room = await Room.findOne(roomRent.room);
    if (!room || !roomRent) {
      return res.status(404).json('Room not found');
    }
    roomRent.status = 'Đã duyệt';
    room.status = 'Đã đặt';
    await roomRent.save();
    await room.save();
    return res.status(200).json(roomRent);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
