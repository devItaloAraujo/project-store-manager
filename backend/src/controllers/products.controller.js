const { productsService } = require('../services');

const findAll = async (req, res) => {
  const { status, data } = await productsService.findAll();
  return res.status(status).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productsService.findById(id);
  return res.status(status).json(data);
};

module.exports = {
  findAll,
  findById,
};