const express = require('express');
const router = express.Router();
const { chatWithAI } = require('../controllers/chatbotController');

// POST /api/chatbot
router.post('/', chatWithAI);

module.exports = router;
