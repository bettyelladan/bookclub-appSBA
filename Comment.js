const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  reviewId: { type: mongoose.Schema.Types.ObjectId, ref: 'BookReview', required: true },
  commentText: { type: String, required: true },
  commentedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  commentedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', commentSchema);