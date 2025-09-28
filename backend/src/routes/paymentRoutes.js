const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.get('/', paymentController.getPayments);
router.post('/', auth, role('buyer'), paymentController.createPayment);
router.get('/:id', paymentController.getPayment);
router.patch('/:id/status', auth, role('admin'), paymentController.updatePaymentStatus);

module.exports = router; 