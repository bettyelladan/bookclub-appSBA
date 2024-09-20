const mongoose = require('mongoose');

const bookReviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  reviewText: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BookReview', bookReviewSchema);