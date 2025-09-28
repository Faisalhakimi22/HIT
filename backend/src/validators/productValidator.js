const { body } = require('express-validator');

exports.createProductValidator = [
  body('vendor').notEmpty().withMessage('Vendor is required'),
  body('title').notEmpty().withMessage('Title is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('price.amount').isNumeric().withMessage('Price amount must be numeric'),
  body('price.currency').notEmpty().withMessage('Currency is required')
]; 