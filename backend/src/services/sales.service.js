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

const validateBody = async (body) => {
  const salesList = await salesModel.findAll();
  const result = body.map((element) => {
    if (!element.productId) {
      return { status: 400, data: { message: '"productId" is required' } };
    }
    if (element.quantity === undefined) {
      return { status: 400, data: { message: '"quantity" is required' } };
    }
    if (element.quantity <= 0) {
      return { status: 422, data: { message: '"quantity" must be greater than or equal to 1' } };
    }
    if (!salesList.some((item) => item.productId === element.productId)) {
      return { status: 404, data: { message: 'Product not found' } };
    }
    return { status: 201 };
  });
  return result;
};

const insertSale = async (body) => {
  const arrayStatus = await validateBody(body);
  if (arrayStatus.some((item) => item.status !== 201)) {
    return arrayStatus.find((item) => item.status !== 201);
  }
  const data = await salesModel.insertSale(body);
  return { status: 201, data };
};

module.exports = {
  findAll,
  findById,
  insertSale,
};