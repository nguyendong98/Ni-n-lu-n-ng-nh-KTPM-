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
        const { roomrents, datecheckin, datecheckout, identitycard, phone,  nationality } = req.body
        try {
            const user = await User.findById(req.user.id).select('-password');
            if(datecheckout <= datecheckin){
                return res.status(400).json({ errors: [{ msg: 'Day checkout can not be less than Day check in' }] });
            }
            let roomrented = new RoomRented({
                roomrents: roomrents,
                user,
                datecheckin,
                datecheckout,
                identitycard,
                phone,
                nationality
            })
            await roomrented.save()

            return res.json({data: {roomrented}})
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


module.exports =  router
