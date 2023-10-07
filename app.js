const express = require('express');
require('./db/connect');
const PORT = process.env.PORT || 3000;

const app = express();

// Import the API routes
const doctorRoutes = require('./routes/api/doctors/doctor_list.js');
const appointmentRoutes = require('./routes/api/appointments/book_appointments.js');

// Register the API routes
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);

// Start the Express server
app.listen(PORT, () => {
    console.log('Express server listening on port 3000');
});
