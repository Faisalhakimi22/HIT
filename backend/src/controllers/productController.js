const Product = require('../models/Product');
const productService = require('../modules/bazaar/services/productService');

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getProducts = async (req, res) => {
  const { search, page, limit } = req.query;
  const result = await productService.listProducts({ search, page: Number(page) || 1, limit: Number(limit) || 10 });
  res.json({ items: result.items, total: result.total, page: result.page, limit: result.limit });
};

exports.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).end();
}; 