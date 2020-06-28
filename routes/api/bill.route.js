const express = require('express');
const router = express.Router();
const admin = require('./../../middleware/admin');
const auth = require('./../../middleware/auth');
const Bill = require('../../models/Bill');
const Checkout = require('../../models/Checkout');

// @route    GET api/bill
// @desc     get all bill
// @access   Public
// Lấy dánh sách các bill
router.get('/', admin, async (req, res) => {
  try {
    const allbill = await Bill.find();
    res.status(200).json(allbill);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/bill/id(user)
// @desc     GET all bill of user
// @access   Private
// Lấy toàn bộ danh sách các bill của user đó
router.get('/userbill', auth, async (req, res) => {
  try {
    const userbill = await Bill.findOne({ customer: req.user.id });
    return res.status(200).json(userbill);
  } catch (e) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/bill/checkout/id(bill)
// @desc     Checkout function
// @access   Private
// Thực hiện chứ năng checkout lưu thông tin vào bảng checkout
router.post('/checkout/:id', admin, async (req, res) => {
  try {
    const billCheckout = await Bill.findById(req.params.id);
    const checkout = new Checkout({
      bill: billCheckout,
      totalprice: billCheckout.total_price,
    });
    await checkout.save();
    return res.status(200).json(checkout);
  } catch (e) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});
// @route    PUT api/bill/checkout/id
// Cập nhật trạng thái bill
router.put('/checkout/:id', admin, async (req, res) => {
  try {
    const billCheckout = await Bill.findById(req.params.id);
    billCheckout.status = 'checked_out';
    await billCheckout.save();
    return res.status(200).json(billCheckout);
  } catch (e) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/bill/checkout
// @desc     Get all bill checked out
// @access   Private
// Lấy tất cả các bill đã check out

router.get('/checkout', admin, async (req, res) => {
  try {
    const checkout = await Checkout.find();
    return res.status(200).json(checkout);
  } catch (e) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
