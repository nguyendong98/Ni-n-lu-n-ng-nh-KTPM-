const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const KindOfRoom = require('../../models/KindOfRoom')
const auth = require('../../middleware/auth');

// @route    GET api/kindofrooms
// @desc     get all kindofroom
// @access   Public
// Lấy tất cả phòng
router.get('/', async (req, res) => {
    try {
        const kindofroom = await KindOfRoom.find()
        
        res.json(kindofroom)

    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error')   
    }
})

// @route    POST api/kindofrooms
// @desc     post kindofroom
// @access   Private
// Thêm loại phòng ` yêu cầu authenticate `
router.post(
    '/',
    [
        auth,
        [
            check('name', 'Name is required')
            .not()
            .isEmpty(),
            check('price', 'Price is require')
            .not()
            .isEmpty(),
            check('text', 'Text is required')
            .not()
            .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        const {name,price, quatity, image, text} = req.body
        try {
            let room = await KindOfRoom.findOne({ name })
            if(room){
                return res
                        .status(400)
                        .json({ errors: [{msg: 'Room already exists'}]});
            }

            let kindofroom = new KindOfRoom({
                name,
                price,
                quatity,
                image,
                text
            })
            await kindofroom.save()
            
            return res.json(kindofroom)
        } catch (error) {
            console.error(err.message);
            res.status(500).send('Server Error')   
        }
    }
)


module.exports = router