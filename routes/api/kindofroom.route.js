const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const KindOfRoom = require('../../models/KindOfRoom');
const auth = require('./../../middleware/auth');
const admin = require('../../middleware/admin');

// @route    GET api/kindofrooms
// @desc     get all kindofroom
// @access   Public
// Lấy tất cả phòng
router.get('/', async (req, res) => {
  try {
    const kindofroom = await KindOfRoom.find();

    res.status(200).json(kindofroom);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/kidofrooms/:id
// @desc     get kidofroom by id
// @access   Public
// lấy phòng theo id
router.get('/:id', async (req, res) => {
  try {
    const room = await KindOfRoom.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ errors: [{ msg: 'Room not found' }] });
    }
    res.status(200).json(room);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/kindofrooms
// @desc     post kindofroom
// @access   Private
// Thêm loại phòng ` yêu cầu authenticate `
router.post(
  '/',
  [
    auth,
    admin,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('price', 'Price is require').not().isEmpty(),
      check('text', 'Text is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    var {
      name,
      price,
      quatity,
      image,
      size,
      capacity,
      bed,
      services,
      text,
    } = req.body;
    try {
      let room = await KindOfRoom.findOne({ name });
      if (room) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Room already exists' }] });
      }
      if (services) {
        services = services.split(',').map((val) => val.trim());
      }
      let kindofroom = new KindOfRoom({
        name,
        price,
        quatity,
        size,
        capacity,
        bed,
        services,
        image,
        text,
      });
      await kindofroom.save();

      return res.json(kindofroom);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
