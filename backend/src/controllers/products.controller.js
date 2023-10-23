const { productsService } = require('../services');

const findAll = async (req, res) => {
  const { status, data } = await productsService.findAll();
  return res.status(status).json(data);
};

module.exports = {
  findAll,
};