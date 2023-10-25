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
  
module.exports = {
  findAll,
  findById,
};