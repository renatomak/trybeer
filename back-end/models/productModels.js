const connection = require('./connection');

const getProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const addSale = async (dataSale) => {
  const {
    userId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status,
  } = dataSale;
  const [teste] = await connection.execute(
    `INSERT INTO sales (user_id, total_price, delivery_address, delivery_number, sale_date, status)
    VALUES (?, ?, ?, ?, ?, ?);`,
    [userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status],
  );
  const { insertId } = teste;
  return { insertId };
};

const addSaleProd = async (saleId, productId, quantity) => {
  await connection.execute(`INSERT INTO sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?);`,
    [saleId.insertId, productId, quantity]);
};

const getOrders = async () => {
  const query = `SELECT * FROM Trybeer.sales S, Trybeer.products P, Trybeer.sales_products SP 
  WHERE S.id = SP.sale_id AND P.id = SP.product_id`;
  const [[orders]] = await connection.execute(query);

  return orders;
};

module.exports = {
  getProducts,
  addSale,
  addSaleProd,
  getOrders,
};

// {
//   email,
//   totalPrice,
//   deliveryAddress,
//   deliveryNumber,
//   itens: [
//     {
//       productId,
//       quantity,
//     },
//     {
//       productId,
//       quantity,
//     }
//   ]
// }