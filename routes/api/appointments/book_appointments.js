const express = require('express');
const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patientId: { type: String, required: true },
  doctorId: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

const router = express.Router();

router.post('/', async (req, res) => {
  const appointment = new Appointment({
    patientId: req.body.patientId,
    doctorId: req.body.doctorId,
    date: req.body.date,
    time: req.body.time,
    status: req.body.status || 'pending',
  });

  try {
    await appointment.save();

    res.status(201).json({
      message: 'Appointment booked successfully.',
      appointment,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;
