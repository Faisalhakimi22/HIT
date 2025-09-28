const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  status: { type: String, default: 'pending' },
  escrowStatus: { type: String, default: 'held' }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema); 