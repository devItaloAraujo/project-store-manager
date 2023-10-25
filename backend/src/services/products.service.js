const { productsModel } = require('../models');

const findAll = async () => {
  const data = await productsModel.findAll();
  return { status: 200, data };
};

const findById = async (id) => {
  const data = await productsModel.findById(id);

  if (!data) {
    return { status: 404, data: { message: 'Product not found' } };
  }
  return { status: 200, data };
};

const insertProduct = async (body) => {
  if (!body.name) {
    return { status: 400, data: { message: '"name" is required' } };
  }
  if (body.name.length < 5) {
    return { status: 422, data: { message: '"name" length must be at least 5 characters long' } };
  }
  const data = await productsModel.insertProduct(body);
  return { status: 201, data };
};

module.exports = {
  findAll,
  findById,
  insertProduct,
};