const mongoose = require('mongoose');
const FeedbackSchema = new mongoose.Schema({
  user: {
    type: Object,
    ref: 'users',
  },
  kindofroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'kindofroom',
  },
  comment: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Feedback = mongoose.model('feedback', FeedbackSchema);
