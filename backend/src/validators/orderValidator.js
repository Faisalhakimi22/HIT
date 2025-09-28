const { body } = require('express-validator');

exports.createOrderValidator = [
  body('seller').notEmpty().withMessage('Seller is required'),
  body('items').isArray({ min: 1 }).withMessage('Items array required'),
  body('items.*.product').notEmpty().withMessage('Product ID required'),
  body('items.*.quantity').isInt({ min: 1 }).withMessage('Quantity must be >=1'),
  body('totalAmount').isNumeric().withMessage('Total amount required')
]; 