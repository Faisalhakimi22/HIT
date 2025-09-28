const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create({ ...req.body, buyer: req.user._id });
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find().populate('buyer', 'name').populate('seller', 'businessInfo');
  res.json(orders);
};

exports.getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id).populate('items.product');
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.json(order);
};

exports.updateOrderStatus = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json(order);
};

exports.deleteOrder = async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.status(204).end();
}; 