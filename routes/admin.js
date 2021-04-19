const express = require('express');
const path = require('path');
const productsController = require('../controllers/controllers');

const router = express.Router();

router.get('/add-product', productsController.getAddProducts)

router.post('/add-product', productsController.postAddProducts)

module.exports = router;