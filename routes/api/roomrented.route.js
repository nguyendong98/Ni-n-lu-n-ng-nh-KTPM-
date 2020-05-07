const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Room = require('./../../models/Room')
const RoomRented = require('./../../models/RoomRented')
const Customer = require('./../../models/Customer')
const User = require('./../../models/User')
const auth = require('./../../middleware/auth')
const admin = require('./../../middleware/admin')
// @route    POST api/roomrents
// @desc     book room
// @access   Public
// Đặt phòng
router.post('/', 

    [
        auth,
        [
        check('roomname', 'Room name is required')
            .not()
            .isEmpty(),
        check('datecheckin', 'Date chehck in is required')
            .not()
            .isEmpty(),
        check('datecheckout', 'Date check out is required')
            .not()
            .isEmpty(),
        
        check('identitycard', 'Identitycard  is required')
            .not()
            .isEmpty(),
        check('phone', 'Phone  is required')
            .not()
            .isEmpty(),
        ]    
                      
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        const { roomname, datecheckin, datecheckout, identitycard, phone,  nationality } = req.body
        try {
            const user = await User.findById(req.user.id).select('-password');
            const roombook = await Room.findOne({name: roomname}).populate("room", ['name', 'price'])
            if(!roombook){
                return res.status(404).json({msg: 'Room not found'})                
            }
            if(roombook.status === 'Đã được đặt'){
                return res.status(400).json({msg: 'Room is being booked'})
            }
            if(datecheckout <= datecheckin){
                return res.status(400).json({ errors: [{ msg: 'Day checkout can not be less than Day check in' }] });
            }
            
            var customer = await Customer.findOne({user: req.user.id});
            if(customer){
                customer.count += 1;
                await customer.save()
            }
            else{
                 customer = new Customer({
                    user,
                    phone,                    
                    identitycard,
                    nationality,
                    count: 1
                })
                await customer.save()
                
            }
            let roomrented = new RoomRented({
                room: roombook,
                user,
                datecheckin,
                datecheckout,
                
                identitycard,
                phone,
               
                nationality
                
            })
            await roomrented.save()
            
            return res.json({data: {roomrented, customer}})
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error');            
        }
    } 
)

// @route    GET api/roomrents
// @desc     GET all roomrented
// @access   Public
// Lấy toàn bộ danh sách phòng đã được đặt
router.get('/', async (req, res) => {
    try {
        const allrooms = await RoomRented.find().sort({ date: -1 });
        return res.json(allrooms)

    } catch (error) {
        console.error(error)
        res.status(500).send('Server Error');
    }
})

// @route    DELETE api/roomrented/:id_roomrented
// @desc     Delete roomrented by id
// @access   Private
// Xóa phòng thuê theo id
router.delete('/:id_roomrented', auth , async (req, res) => {
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

// @route    DELETE api/roomrented/
// @desc     Delete all roomrented
// @access   Public
// Xóa all phòng thuê
router.delete('/', admin, async (req, res) => {
    try {
        await RoomRented.deleteMany()
        const room = await Room.find({status: "Đã đặt"})
        
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
module.exports =  router
