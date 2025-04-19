const Doctor = require('../models/Doctor');

// @desc Get all doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Add a new doctor
exports.createDoctor = async (req, res) => {
  const { name, specialization, schedule } = req.body;
  try {
    const newDoctor = new Doctor({ name, specialization, schedule });
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc Get a doctor by ID
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
    res.status(200).json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
