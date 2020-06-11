const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const admin = require('./../../middleware/admin');
const auth = require('./../../middleware/auth');
const Feedback = require('./../../models/Feedback');
const User = require('./../../models/User');

// @route    POST api/feedback/:id
// @desc     post comment by id roomcategory
// @access   private
// tao comment
router.post(
  '/:id',
  auth,
  check('comment', 'Comment is required').not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { comment, rating } = req.body;
    try {
      const user = await User.findById(req.user.id).select('-password');
      //   const kindofroom = await KindOfRoom.findOne(req.room.name);
      const feedback = new Feedback({
        user,
        kindofroom: req.params.id,
        comment,
        rating,
      });
      await feedback.save();
      return res.json(feedback);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    GET api/feedback
// @desc     get all comment by id roomcategory
// @access   private
// lay tat ca comment theo id loai phong

router.get('/', async (req, res) => {
  try {
    const allComment = await Feedback.find();
    res.status(200).json(allComment);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/feedback/:id
// @desc     delete comment by id comment
// @access   private
// xoa comment theo id comment
router.delete('/:id', auth, async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) {
      return res.status(404).json('Comment not found');
    }
    await feedback.remove();
    return res.status(200).json('The comment has been deleted');
  } catch (error) {
    console.log(error.message);
    res.status.apply(500).send('Server Error');
  }
});
module.exports = router;
