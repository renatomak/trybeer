const fs = require('fs');
const path = require('path');
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

  const images = async (req, res) => {
    const { imageName } = req.params;
    const image = fs.createReadStream(path.join(__dirname, `../images/${imageName}`));
    res.status(OK_200).sendFile(image.path); 
  };

  const checkout = async (req, res) => {
    const pedido = req.body;
    res.status(OK_200).json({ message: 'Sucesso no controller', pedido });
  };

  module.exports = {
    products,
    images,
    checkout,
  };
