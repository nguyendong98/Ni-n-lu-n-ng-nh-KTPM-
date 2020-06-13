const express = require('express')
const router = express.Router();
const auth = require('./../../middleware/auth');
let Bill = require('./../../models/Bill')
// @route    POST api/bill/:id
// @desc     post comment by id roomcategory
// @access   private
// get bill by id
router.get('/:id', auth, async (req, res) => {
    try {
        var bill = await Bill.find({roomrent_id: req.params.id})
        bill = bill[0];
        return res.json(bill)
    } catch (e) {
        console.error(e.errors);
        return res.status(500).send('Server errors');
    }
})

module.exports = router
