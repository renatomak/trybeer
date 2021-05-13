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

const getOrders = async () => {
  const [pedidos] = await connection.execute(`SELECT
    id AS orderNum,
    total_price AS orderValue,
    delivery_address AS orderAddress,
    delivery_number AS orderAddressNum, status FROM sales ORDER BY id;`);
  return pedidos;
};

const findSale = async (id) => {
  const [[sale]] = await connection.execute('SELECT * FROM sales WHERE id = ?;', [id]);
  return sale;
};

const getSaleAdmin = async (id) => {
  const [[headerOrder]] = await connection.execute(
    `SELECT
      id AS orderNum,
      status AS orderStatus,
      total_price AS orderTotalValue
      FROM sales WHERE id = ?;`, [id],
  );
  return headerOrder;
};

const getSaleProductsAdmin = async (id) => {
  const query = `SELECT
  sp.quantity AS itenQuantity,
  p.name AS itenName,
  p.price AS itenPriceUn,
  (p.price * sp.quantity) as itenPriceTotal
  FROM sales_products AS sp
  INNER JOIN products AS p
  ON p.id = sp.product_id
  WHERE sale_id = ?;`;
  const [itens] = await connection.execute(query, [id]);
  return itens;
};

const updateOrderStatus = async (id) => {
  const result = await connection.execute(
    'UPDATE sales SET status = "Entregue" WHERE id = ?;', [id],
  );
  return result;
};

module.exports = {
  getProducts,
  addSale,
  addSaleProd,
  getOrdersByUserId,
  getSaleProducts,
  getOrders,
  getSaleAdmin,
  getSaleProductsAdmin,
  findSale,
  updateOrderStatus,
};