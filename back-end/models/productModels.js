const connection = require('./connection');

const getProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

module.exports = {
  getProducts,
};

// {
//   email,
//   total_Price,
//   deliveryAddress,
//   delivery_Number,
//   itens: [
//     {
//       product_Id,
//       quantity,
//     },
//     {
//       product_Id,
//       quantity,
//     }
//   ]
// }