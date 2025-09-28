const productRepo = require('../repositories/productRepo');

exports.listProducts = async (query) => {
  return productRepo.search(query);
}; 