const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentroute');

const app = express();
const PORT = 3000;
const MONGODB_URI = 'mongodb+srv://allen:allen@cluster0.wesod.mongodb.net/student'; // Change this if using MongoDB Atlas

// Middleware
app.use(bodyParser.json());


// MongoDB Connection
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected is MongoDB'))
    .catch(err => console.log(err));

// Routes
app.use('/students', studentRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
