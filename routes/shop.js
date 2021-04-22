const express = require('express');

const router = express.Router();
const productsController = require("../controllers/shop")

router.get('/', productsController.getIndex)

router.get('/products', productsController.getProducts)

router.get('/products/:productId', productsController.getProdById);

router.get('/cart', productsController.getCart)

router.post('/cart', productsController.postCart)

router.get('/orders', productsController.getOrders)

router.get('/products', productsController.getProducts)

module.exports = router;