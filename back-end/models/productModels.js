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

const getOrdersByUserId = async (userId) => {
  // CHECAR ESSE PONTO COM RENATO
  const [[pedidos]] = await connection.execute('SELECT * FROM sales WHERE user_id = ? ORDER BY id;',
    [userId]);
  return pedidos;
};

const getOrders = async () => {
  const [pedidos] = await connection.execute(`SELECT
    id AS orderNum,
    total_price AS orderValue,
    delivery_address AS orderAddress,
    delivery_number AS orderAddressNum, status FROM sales ORDER BY id;`);
  return pedidos;
};

module.exports = {
  getProducts,
  addSale,
  addSaleProd,
  getOrdersByUserId,
  getOrders,
};