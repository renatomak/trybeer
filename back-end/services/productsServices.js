const dateFormat = require('dateformat');
const { getProducts, addSale, addSaleProd, getOrdersByUserId } = require('../models/productModels');
const { getByEmail } = require('../models/userModels');

const productsServices = async () => {
  const products = await getProducts();
  return products;  
};

const saleProd = async (saleId, itens) => {
  itens.forEach(async (item) => {
    const { id, quantity } = item;
    await addSaleProd(saleId, id, quantity);
  });
  return { message: 'Compra realizada com sucesso!' };
};

const checkoutServices = async (pedido) => {
  const { email, totalPrice, deliveryAddress, deliveryNumber, itens } = pedido;
  const saleDate = new Date();
  dateFormat(saleDate, 'mm/dd/yyyy');
  const status = 'Pendente';
  const user = await getByEmail(email);
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

const ordersServices = async (email) => {
  if (email) {
    const user = await getByEmail(email);
    if (!user) return { message: 'Usuario não encontrado' };
    const userId = user.id;
    const pedidos = await getOrdersByUserId(userId);
    return pedidos;
  }

  return { message: 'Email não informado' };
};

module.exports = {
  productsServices,
  checkoutServices,
  ordersServices,
};