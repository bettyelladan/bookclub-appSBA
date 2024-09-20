const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

router.post('/:reviewId', async (req, res) => {
  try {
    const { commentText, commentedBy } = req.body;
    const comment = new Comment({
      reviewId: req.params.reviewId,
      commentText,
      commentedBy
    });
    await comment.save();
    res.status(201).send({ message: 'Comment added successfully', comment });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.get('/:reviewId', async (req, res) => {
  try {
    const comments = await Comment.find({ reviewId: req.params.reviewId }).populate('commentedBy');
    res.status(200).send(comments);
  } catch (error) {
    res.status(404).send({ error: 'Comments not found' });
  }
});

module.exports = router;