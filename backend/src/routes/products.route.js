const route = require('express').Router();
const { productsController } = require('../controllers');
// const validateTravelFields = require('../middlewares/validateTravelFields');

route.get('/', productsController.findAll);
route.get('/:id', productsController.findById);

module.exports = route;