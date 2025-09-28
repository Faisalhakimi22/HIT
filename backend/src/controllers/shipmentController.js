const Shipment = require('../models/Shipment');

exports.createShipment = async (req, res) => {
  try {
    const shipment = await Shipment.create(req.body);
    res.status(201).json(shipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getShipments = async (req, res) => {
  const shipments = await Shipment.find().populate('order');
  res.json(shipments);
};

exports.getShipment = async (req, res) => {
  const shipment = await Shipment.findById(req.params.id).populate('order');
  if (!shipment) return res.status(404).json({ message: 'Shipment not found' });
  res.json(shipment);
};

exports.updateShipmentStatus = async (req, res) => {
  const shipment = await Shipment.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json(shipment);
}; 