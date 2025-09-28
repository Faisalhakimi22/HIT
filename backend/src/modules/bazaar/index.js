const express = require('express');
const productRoutes = require('../../routes/productRoutes');
const vendorRoutes = require('../../routes/vendorRoutes');

const router = express.Router();

router.use('/products', productRoutes);
router.use('/vendors', vendorRoutes);

module.exports = router; 