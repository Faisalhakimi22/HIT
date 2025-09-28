const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  businessInfo: { type: Object },
  productCategories: [{ type: String }],
  ratingsScore: { type: Number, default: 0 },
  verificationLevel: { type: Number, default: 0 },
  bankingInfo: { type: Object }
}, { timestamps: true });

module.exports = mongoose.model('Vendor', vendorSchema); 