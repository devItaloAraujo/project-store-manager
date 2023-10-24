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

module.exports = {
  findAll,
  findById,
};