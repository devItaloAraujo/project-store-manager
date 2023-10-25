const route = require('express').Router();
const { salesController } = require('../controllers');
// const validateTravelFields = require('../middlewares/validateTravelFields');

route.get('/', salesController.findAll);
route.get('/:id', salesController.findById);
route.post('/', salesController.insertSale);

module.exports = route;