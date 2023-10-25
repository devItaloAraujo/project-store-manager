const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );
  return products; 
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return product;
};

const insertProduct = async (body) => {
  await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [body.name],
  );
  const products = await findAll();
  const [lastproduct] = products.slice(-1);
  return lastproduct;
};
  
module.exports = {
  findAll,
  findById,
  insertProduct,
};