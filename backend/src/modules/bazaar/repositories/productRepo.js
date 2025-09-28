const Product = require('../../../models/Product');

exports.search = async ({ search, page = 1, limit = 10 }) => {
  const filter = search ? { $text: { $search: search } } : {};
  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    Product.find(filter).skip(skip).limit(limit).exec(),
    Product.countDocuments(filter)
  ]);
  return { items, total, page, limit };
}; 