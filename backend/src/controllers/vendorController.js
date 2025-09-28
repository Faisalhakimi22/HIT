const Vendor = require('../models/Vendor');

exports.createVendor = async (req, res) => {
  try {
    const vendor = await Vendor.create({ ...req.body, user: req.user._id });
    res.status(201).json(vendor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getVendors = async (req, res) => {
  const vendors = await Vendor.find().populate('user', 'name email');
  res.json(vendors);
};

exports.getVendor = async (req, res) => {
  const vendor = await Vendor.findById(req.params.id).populate('user', 'name email');
  if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
  res.json(vendor);
};

exports.updateVendor = async (req, res) => {
  const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(vendor);
};

exports.deleteVendor = async (req, res) => {
  await Vendor.findByIdAndDelete(req.params.id);
  res.status(204).end();
}; 