const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Room = require('../../models/Room')
const KindOfRoom = require('../../models/KindOfRoom')
const auth = require('../../middleware/auth');
const RoomRented = require('./../../models/RoomRented')


// @route    POST api/rooms
// @desc     create Room
// @access   Private
// Thêm phòng
router.post('/', 
    [
        auth,
        [
            check('kindofroom', 'Kind of room is required')
                .not()
                .isEmpty(),
            check('name','Name of roome is required') 
                .not()
                .isEmpty()   
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {kindofroom, name, status} = req.body
        try {
            const nameroom = await Room.findOne({name})
            
        
            if(nameroom){
                return res.status(400).json({ errors: [{ msg: 'Room already exists' }] });
            }
            const kind = await KindOfRoom.findOne({name: kindofroom })
                                         .populate('kind', ['name', 'price'])
            
            let room = new Room({
                kind,
                name,
                status
            })
           
            await room.save()
            return res.json(room)
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error');  
        }
    }
)
// @route    GET api/rooms
// @desc     getall Room
// @access   public
// xem tất cả các phòng phòng
router.get('/', async (req, res) => {
    try {
        const allRoom = await Room.find() 
        res.status(200).json(allRoom)   
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }
})


// @route    DELETE api/rooms/:id
// @desc     dete Room by id
// @access   private
// xóa phòng theo id
router.delete('/:id', auth, async (req, res) => {
    try {
        const room = await Room.findById(req.params.id)
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !room){
            return res.status(404).json('Room not found')
        }
        await room.remove()
        await RoomRented.findOneAndRemove({room: room._id})
        return res.status(200).json({msg : "Room removed"})
    } catch (error) {
        console.log(error.message)
        res.status.apply(500).send('Server Error')
    }
})
module.exports = router