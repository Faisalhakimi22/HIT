const express = require('express');
const paymentRoutes = require('../../routes/paymentRoutes');

const router = express.Router();

router.use('/payments', paymentRoutes);

module.exports = router; 