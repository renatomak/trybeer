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
  const [[pedidos]] = await connection.execute('SELECT * FROM sales WHERE user_id = ? ORDER BY id;',
    [userId]);
  return pedidos;
};

const getSaleProducts = async (id) => {
  const query = `SELECT sale_id as saleId, product_id as productId, quantity, name, 
  price, date_format(sale_date, "%d/%m") as saleDate FROM Trybeer.sales_products SP, 
  Trybeer.products P, Trybeer.sales S
  WHERE SP.product_id = P.id AND SP.sale_id = S.id AND SP.sale_id=?;`;
  const [result] = await connection.execute(query, [id]);

  return result;
};

module.exports = {
  getProducts,
  addSale,
  addSaleProd,
  getOrdersByUserId,
  getSaleProducts,
};