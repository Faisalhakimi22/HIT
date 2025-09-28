const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  status: { type: String, default: 'pending' },
  trackingInfo: { type: Object },
  origin: { type: Object },
  destination: { type: Object },
  estimatedDelivery: { type: Date },
  actualDelivery: { type: Date },
  documents: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Shipment', shipmentSchema); 