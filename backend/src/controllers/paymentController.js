const Payment = require('../models/Payment');

exports.createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json(payment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getPayments = async (req, res) => {
  const payments = await Payment.find().populate('order');
  res.json(payments);
};

exports.getPayment = async (req, res) => {
  const payment = await Payment.findById(req.params.id).populate('order');
  if (!payment) return res.status(404).json({ message: 'Payment not found' });
  res.json(payment);
};

exports.updatePaymentStatus = async (req, res) => {
  const payment = await Payment.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json(payment);
}; 