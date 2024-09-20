const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// Define a GET route for /users
router.patch('/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // Return the updated document
        runValidators: true // Validate the update against the schema
      });
      
      if (!updatedUser) return res.status(404).json({ message: 'User not found' });
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // PUT route to replace a user entirely
  router.put('/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndReplace(req.params.id, req.body, {
        new: true, // Return the replaced document
        runValidators: true // Validate the update against the schema
      });
      
      if (!updatedUser) return res.status(404).json({ message: 'User not found' });
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  


router.get('/', (req, res) => {
  res.send('Welcome to the User Home Page');
});

// Define a POST route for creating new users
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Create a new user
  const newUser = new User({
    name,
    email,
    password
  });

  try {
    // Save the user to the database
    await newUser.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(400).send('Error creating user');
  }
});

module.exports = router;