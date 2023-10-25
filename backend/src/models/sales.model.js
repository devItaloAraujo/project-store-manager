const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [sales] = await connection.execute(
    `SELECT sale_id, date, product_id, quantity FROM 
    sales_products AS sp
    JOIN 
    sales AS s
    WHERE sp.sale_id = s.id`,
  );
  return camelize(sales); 
};

const findById = async (salesId) => {
  const [sale] = await connection.execute(
    `SELECT date, product_id, quantity FROM 
    sales_products AS sp
    JOIN 
    sales AS s
    WHERE sp.sale_id = s.id
    AND sale_id = ?`,
    [salesId],
  );
  return camelize(sale);
};

const createNewSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (date) VALUES (NOW())',
  );
  return insertId;
};

const insertSale = async (body) => {
  const insertId = await createNewSale();
  const arrayPromisses = body.map(async (item) => { 
    await connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [insertId, item.productId, item.quantity],
    );
  });
  await Promise.all(arrayPromisses);
  const newSale = {
    id: insertId,
    itemsSold: body,
  };
  return newSale;
};
  
module.exports = {
  findAll,
  findById,
  insertSale,
};