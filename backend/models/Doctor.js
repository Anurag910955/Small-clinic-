const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  schedule: [{
    day: String,
    startTime: String,
    endTime: String,
  }],
}, {
  timestamps: true
});

module.exports = mongoose.model('Doctor', doctorSchema);
