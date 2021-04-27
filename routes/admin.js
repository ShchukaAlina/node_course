const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminController.getAddProducts);
router.post('/add-product', adminController.postAddProducts);

router.post('/edit-product', adminController.postEditProduct);
router.get('/edit-product/:productId', adminController.getEditProduct);

router.get('/products', adminController.getProduct);

router.post('/delete-product', adminController.postDeleteProduct);


module.exports = router;