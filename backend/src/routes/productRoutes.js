const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');
const { createProductValidator } = require('../validators/productValidator');
const validate = require('../middleware/validationMiddleware');

router.get('/', productController.getProducts);
router.post('/', auth, role('seller'), createProductValidator, validate, productController.createProduct);
router.get('/:id', productController.getProduct);
router.put('/:id', auth, role('seller'), productController.updateProduct);
router.delete('/:id', auth, role('seller'), productController.deleteProduct);

module.exports = router; 