const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.get('/', vendorController.getVendors);
router.post('/', auth, role('seller'), vendorController.createVendor);
router.get('/:id', vendorController.getVendor);
router.put('/:id', auth, role('seller'), vendorController.updateVendor);
router.delete('/:id', auth, role('seller'), vendorController.deleteVendor);

module.exports = router; 