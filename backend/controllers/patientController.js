const Patient = require('../models/Patient');
const User = require('../models/User');

const getAllPatients = async (req, res) => {
  const patients = await Patient.find().populate('user', 'name email');
  res.json(patients);
};

const getPatientById = async (req, res) => {
  const patient = await Patient.findById(req.params.id).populate('user', 'name email');
  if (!patient) return res.status(404).json({ message: 'Patient not found' });
  res.json(patient);
};

const createPatient = async (req, res) => {
  const { user, age, gender, contactNumber, address, medicalHistory } = req.body;
  const existing = await Patient.findOne({ user });
  if (existing) return res.status(400).json({ message: 'Patient already exists' });

  const patient = await Patient.create({
    user, age, gender, contactNumber, address, medicalHistory
  });
  res.status(201).json(patient);
};

const updatePatient = async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!patient) return res.status(404).json({ message: 'Patient not found' });
  res.json(patient);
};

const deletePatient = async (req, res) => {
  const patient = await Patient.findByIdAndDelete(req.params.id);
  if (!patient) return res.status(404).json({ message: 'Patient not found' });
  res.json({ message: 'Patient deleted' });
};

module.exports = {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient
};
