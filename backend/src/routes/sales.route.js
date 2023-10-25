const route = require('express').Router();
const { salesController } = require('../controllers');
// const validateTravelFields = require('../middlewares/validateTravelFields');

route.get('/', salesController.findAll);
route.get('/:id', salesController.findById);

module.exports = route;