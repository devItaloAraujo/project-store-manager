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

const insertSale = async (body) => {
  const data = await salesModel.insertSale(body);
  return { status: 201, data };
};

module.exports = {
  findAll,
  findById,
  insertSale,
};