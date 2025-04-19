const Prescription = require('../models/Prescription');

// Create prescription
exports.createPrescription = async (req, res) => {
  const { patient, doctor, medication, instructions } = req.body;
  const prescription = await Prescription.create({ patient, doctor, medication, instructions });
  res.status(201).json(prescription);
};

// Get all prescriptions
exports.getPrescriptions = async (req, res) => {
  const prescriptions = await Prescription.find().populate('patient doctor');
  res.json(prescriptions);
};

// Get prescription by ID
exports.getPrescriptionById = async (req, res) => {
  const prescription = await Prescription.findById(req.params.id).populate('patient doctor');
  if (prescription) {
    res.json(prescription);
  } else {
    res.status(404).json({ message: 'Prescription not found' });
  }
};

// Delete prescription
exports.deletePrescription = async (req, res) => {
  await Prescription.findByIdAndDelete(req.params.id);
  res.json({ message: 'Prescription deleted' });
};
