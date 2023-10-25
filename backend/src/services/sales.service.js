const { salesModel } = require('../models');

const findAll = async () => {
  const data = await salesModel.findAll();
  return { status: 200, data };
};

const findById = async (id) => {
  const data = await salesModel.findById(id);

  if (!data[0]) {
    return { status: 404, data: { message: 'Sale not found' } };
  }
  return { status: 200, data };
};

module.exports = {
  findAll,
  findById,
};