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

const insertProduct = async (req, res) => {
  const { body } = req;
  const { status, data } = await productsService.insertProduct(body);
  return res.status(status).json(data);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productsService.deleteProduct(id);
  if (data) {
    return res.status(status).json(data);
  }
  return res.status(204).send();
};

module.exports = {
  findAll,
  findById,
  insertProduct,
  deleteProduct,
};