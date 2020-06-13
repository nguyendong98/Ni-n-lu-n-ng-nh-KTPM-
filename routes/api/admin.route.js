
const express = require('express');
const router = express.Router();
const Room = require('./../../models/Room');
const RoomRented = require('./../../models/RoomRented');
const Customer = require('./../../models/Customer');
let Bill = require('./../../models/Bill');
const admin = require('./../../middleware/admin');
const auth = require('./../../middleware/auth');
// @route   GET api/admin/:id
// @access  Private/admin

router.put('/roomrented/:id', admin, async (req, res) => {
  try {
    // Xử lí chọn phòng cho người dùng theo số lượng phòng người dùng đã đặt
    const id = req.params.id;
    const roomRent = await RoomRented.findById(id);
    roomRent.roomrents.map( async val => {
        const roomEmpty = await Room.find({status: 'Empty', kind: val.id_kindOfRoom})
        if(roomEmpty.length < val.length) {
            return res.status(400).json({ errors: [{ msg:'Available rooms are no longer sufficient' }] })
        }
        await roomEmpty.splice(0,roomEmpty.length - val.quantity)
        roomEmpty.map(async val => {
            try {
                val.status = 'Has Placed'
                roomRent.roomrent_detail.push(val);
                const roomChangeStatus = await Room.findById(val._id);
                roomChangeStatus.status = 'Has Placed'
                await roomChangeStatus.save()
                roomRent.status = 'approve';
                await roomRent.save();
            } catch (e) {
                console.log(e)
            }
        })
    })
  // Tạo mới Bill, xử lí discount
  const numberOfDayBook = roomRent.datecheckout.getDate() - roomRent.datecheckin.getDate();

  var total_price = 0;
  // Xử lý giảm giá
  var totalPriceNotDisCount = 0;
  roomRent.roomrents.map(val => {
      total_price += val.quantity * val.price * numberOfDayBook;
      totalPriceNotDisCount = total_price;
  })
  // Xử lí ở bảng Customer
  var customer = await Customer.findOne({user: roomRent.user});
  if(customer) {
      customer.count += 1;
      await customer.save()
      if(customer.count >=3 && customer.count <6) {
          total_price = total_price * 0.95;
      }
      else if(customer.count >=6 && customer.count < 9) {
          total_price = total_price * 0.9;
      }
      else if(customer.count >=9 && customer.count <15) {
          total_price = total_price * 0.85;
      }
      else if(customer.count >= 15) {
          total_price = total_price * 0.75;
      } else total_price = total_price * 1;
      const newBill = new Bill({
          roomrent_id: roomRent._id,
          customer: roomRent.user,
          roomrents: roomRent.roomrents,
          totalPriceNotDisCount,
          discount: customer.count,
          total_price
      })
      await newBill.save()
  }
  else{
      customer = new Customer({
          user: roomRent.user,
          phone: roomRent.phone,
          identitycard: roomRent.identitycard,
          nationality: roomRent.nationality,
          count: 1
      })
      await customer.save()
      const newBill = new Bill({
          roomrent_id: roomRent._id,
          customer: roomRent.user,
          roomrents: roomRent.roomrents,
          totalPriceNotDisCount,
          discount: 1,
          total_price
      })
      await newBill.save()

  }



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
      if(roomrented.roomrent_detail === undefined || roomrented.roomrent_detail.length === 0) {
          await roomrented.remove()


      } else {
          roomrented.roomrent_detail.map( async val => {
              const room = await Room.findOne({name: val.name})
              room.status = 'Empty'

              await room.save()
          })
          await roomrented.remove()

      }


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
      const room = await Room.find({status: "Has Placed"})
      room.map( async val => {
          val.status = "Empty"
          await val.save()

      });
      return res.status(200).json('Delete success')
  } catch (error) {
      console.error(error.message)
      res.status(500).send('Server Error!')
  }
})
