const express = require('express');
const router = express.Router();
const footprintController = require('../controllers/footprintController');
const auth = require('../middleware/auth');

router.post('/calculate', auth, footprintController.calculateFootprint);
router.get('/:userId', auth, footprintController.getUserFootprint);

module.exports = router;
