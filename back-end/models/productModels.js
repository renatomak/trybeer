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
  const [pedidos] = await connection.execute('SELECT * FROM sales WHERE user_id = ? ORDER BY id;',
    [userId]);
  return pedidos;
};

const getSaleProducts = async (id) => {
  const query = `SELECT sp.sale_id AS saleId, p.id AS productId, sp.quantity,
  p.name, (p.price * sp.quantity) as total,
  date_format(s.sale_date, "%d/%m") as saleDate
  FROM sales_products AS sp
  INNER JOIN products AS p 
  INNER JOIN
  sales AS s
  ON p.id = sp.product_id AND s.id = sp.sale_id
  WHERE sale_id =?;`;
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