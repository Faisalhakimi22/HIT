const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');
const { createOrderValidator } = require('../validators/orderValidator');
const validate = require('../middleware/validationMiddleware');

router.get('/', orderController.getOrders);
router.post('/', auth, role('buyer'), createOrderValidator, validate, orderController.createOrder);
router.get('/:id', orderController.getOrder);
router.patch('/:id/status', auth, role('seller'), orderController.updateOrderStatus);
router.delete('/:id', auth, orderController.deleteOrder);

module.exports = router; 