const { getProducts } = require('../models/productModels');

const productsServices = async () => {
  const products = await getProducts();
  return products;  
};

module.exports = {
  productsServices,
};