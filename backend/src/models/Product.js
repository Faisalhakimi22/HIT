const mongoose = require('mongoose');

const moneySchema = {
  amount: { type: Number, required: true },
  currency: { type: String, required: true }
};

const productSchema = new mongoose.Schema({
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  title: { type: Map, of: String, required: true },
  description: { type: Map, of: String },
  category: { type: String, required: true },
  subcategory: { type: String },
  price: moneySchema,
  images: [{ type: String }],
  attributes: { type: Object },
  origin: { type: Object },
  certifications: [{ type: String }],
  inventory: { type: Number, default: 0 }
}, { timestamps: true });

productSchema.index({ 'title.en': 'text', 'description.en': 'text' });

module.exports = mongoose.model('Product', productSchema); 