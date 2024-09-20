const express = require('express');
const BookReview = require('../models/BookReview');
const router = express.Router();

router.post('/new', async (req, res) => {
  try {
    const { title, author, reviewText, rating, createdBy } = req.body;
    const review = new BookReview({ title, author, reviewText, rating, createdBy });
    await review.save();
    res.status(201).send({ message: 'Book review created successfully', review });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const review = await BookReview.findById(req.params.id).populate('createdBy');
    res.status(200).send(review);
  } catch (error) {
    res.status(404).send({ error: 'Review not found' });
  }
});

module.exports = router;