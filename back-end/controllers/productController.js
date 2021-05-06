const { productsServices } = require('../services/productsServices');

const {
  OK_200,
  UNAUTHORIZED_401 } = require('../util');

  const products = async (req, res) => {
    try {
      const allProducts = await productsServices();
      res.status(OK_200).json(allProducts);
    } catch (err) {
      console.error(err.message);
      res.status(UNAUTHORIZED_401).send({ message: 'Internal Error' });    
    }
  };

  module.exports = {
    products,
  };
