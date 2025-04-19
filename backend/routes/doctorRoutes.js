const express = require('express');
const router = express.Router();
const {
  getDoctors,
  createDoctor,
  getDoctorById
} = require('../controllers/doctorController');
const { protect } = require('../middleware/authMiddleware');  // Ensure this is correct (auth middleware)

router.route('/')
  .get(protect, getDoctors)   // This allows GET requests
  .post(protect, createDoctor);  // This allows POST requests

router.route('/:id')
  .get(protect, getDoctorById);

module.exports = router;
