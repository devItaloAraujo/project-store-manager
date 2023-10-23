const route = require('express').Router();
const { productsController } = require('../controllers');
// const validateTravelFields = require('../middlewares/validateTravelFields');

route.get('/', productsController.findAll);

module.exports = route;