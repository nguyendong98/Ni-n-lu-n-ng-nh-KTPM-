const express = require('express');
const router = express.Router();
const Room = require('./../../models/Room');
const RoomRented = require('./../../models/RoomRented');
const admin = require('./../../middleware/admin');
const auth = require('./../../middleware/auth');
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

// @route    DELETE api/admin/roomrented/:id_roomrented
// @desc     Delete roomrented by id
// @access   Private
// Xóa phòng thuê theo id
router.delete('/roomrented/:id_roomrented', auth , async (req, res) => {
  try {
      const roomrented = await RoomRented.findById(req.params.id_roomrented);
      if (!req.params.id_roomrented.match(/^[0-9a-fA-F]{24}$/) || !roomrented){
          return res.status(404).json('Roomrented not found!')
      }

      const room = await Room.findById({_id: roomrented.room})
      await roomrented.remove()
      room.status = "Chưa đặt";
      await room.save()
      return res.status(200).json({msg : 'Roomrented removed!'})
  } catch (error) {
      console.error(error.message)
      res.status(500).send('Server Error')
  }
} )

// @route    DELETE api/admin/roomrented/
// @desc     Delete all roomrented
// @access   Public
// Xóa all phòng thuê
router.delete('/roomrented', admin, async (req, res) => {
  try {
      await RoomRented.deleteMany()
      const room = await Room.find({status: "Đã đặt"})
      console.log(room)
      room.map( async val => {
          val.status = "Còn trống"
          await val.save()
         
      });        
      return res.status(200).send('Delete Success')
  } catch (error) {
      console.error(error.message)
      res.status(500).send('Server Error!')
  }
})