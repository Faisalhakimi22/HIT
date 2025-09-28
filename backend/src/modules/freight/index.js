const express = require('express');
const shipmentRoutes = require('../../routes/shipmentRoutes');

const router = express.Router();

router.use('/shipments', shipmentRoutes);

module.exports = router; 