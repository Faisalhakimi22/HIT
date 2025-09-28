const express = require('express');
const router = express.Router();
const shipmentController = require('../controllers/shipmentController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.get('/', shipmentController.getShipments);
router.post('/', auth, role('seller'), shipmentController.createShipment);
router.get('/:id', shipmentController.getShipment);
router.patch('/:id/status', auth, role('seller'), shipmentController.updateShipmentStatus);

module.exports = router; 