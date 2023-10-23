const { productsModel } = require('../models');

const findAll = async () => {
  const data = await productsModel.findAll();
  return { status: 200, data };
};

module.exports = {
  findAll,
};