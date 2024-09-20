const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const app = express();

// Import user routes
const userRoutes = require('./routes/user');

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the imported user routes
app.use('/users', userRoutes);

mongoose.connect('mongodb://localhost:27017/bookclub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('MongoDB connection error:', err);
  });
  
  // Start the server on port 3000 or an environment-defined port
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });