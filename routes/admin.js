const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminController.getAddProducts)
router.get('/edit-product/:productId', adminController.getEditProduct)

router.get('/products', adminController.getProduct)

router.post('/add-product', adminController.postAddProducts)

module.exports = router;