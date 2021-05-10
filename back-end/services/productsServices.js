const dateFormat = require('dateformat');
const { getProducts, addSale, addSaleProd } = require('../models/productModels');
const { getByEmail } = require('../models/userModels');

const productsServices = async () => {
  const products = await getProducts();
  return products;  
};

const saleProd = async (saleId, itens) => {
  itens.forEach(async (item) => {
    const { productId, quantity } = item;
    await addSaleProd(saleId, productId, quantity);
  });
  return { message: 'Compra realizada com sucesso!' };
};

const checkoutServices = async (pedido) => {
  const { email, totalPrice, deliveryAddress, deliveryNumber, itens } = pedido;
  const saleDate = new Date();
  dateFormat(saleDate, 'mm/dd/yyyy');
  const status = 'Pendente';
  const user = await getByEmail(email);
  console.log(user);
  const userId = user.id;
  const dataSale = {
    userId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status,
  };
  const insertId = await addSale(dataSale);
  const retornoSalesProd = await saleProd(insertId, itens);
  return retornoSalesProd;
};

module.exports = {
  productsServices,
  checkoutServices,
};