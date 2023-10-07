const mongoose = require('mongoose');

// Connect to MongoDB
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/out_patient_system');

// Listen for connection events
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});