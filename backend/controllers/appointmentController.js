const Appointment = require('../models/Appointment');

// Create appointment
exports.createAppointment = async (req, res) => {
  const { patient, doctor, date, reason } = req.body;
  const appointment = await Appointment.create({ patient, doctor, date, reason });
  res.status(201).json(appointment);
};

// Get all appointments
exports.getAppointments = async (req, res) => {
  const appointments = await Appointment.find().populate('patient doctor');
  res.json(appointments);
};

// Get appointment by ID
exports.getAppointmentById = async (req, res) => {
  const appointment = await Appointment.findById(req.params.id).populate('patient doctor');
  if (appointment) {
    res.json(appointment);
  } else {
    res.status(404).json({ message: 'Appointment not found' });
  }
};

// Update appointment
exports.updateAppointment = async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(appointment);
};

// Delete appointment
exports.deleteAppointment = async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Appointment deleted' });
};
