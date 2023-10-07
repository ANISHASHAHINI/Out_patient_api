const express = require('express');
const mongoose = require('mongoose');
const doctorData = require('../../../models/doctors.json');

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  speciality: { type: String, required: true },
  location: { type: String, required: true },
  schedule: { type: Object, required: true },
});

const Doctor = mongoose.model('Doctor', DoctorSchema);

const router = express.Router();

// GET /doctors
router.get('/', async (req, res) => {
  //const doctors = await Doctor.find();

  res.json(doctorData);
});

// POST /doctors
router.post('/', async (req, res) => {
  const doctor = new Doctor({
    name: req.body.name,
    speciality: req.body.speciality,
    location: req.body.location,
    schedule: req.body.schedule,
  });

  try {
    await doctor.save();

    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.get('/:id', async (req, res) => {
    const doctor = await Doctor.findById(req.params.id);
  
    if (!doctor) {
      res.status(404).json({
        error: 'Doctor not found.',
      });
      return;
    }
  
    res.json(doctor);
  });
  
module.exports = router;
