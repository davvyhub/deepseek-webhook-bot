const express = require('express');
const router = express.Router();
const ghlController = require('../controllers/ghlController');

router.post('/', ghlController.handleWebhook);

module.exports = router;
