const express = require('express');
const path = require('path');

const router = express.Router();
const adminData = require('./admin');

router.get('/' ,(req, res, next) => {
    // res.sendFile(path.join(__dirname,'../', 'views', 'shop'))
    const products = adminData.products
    res.render("shop", {docTitle: "Shop", prod: products, path: "/"})
})

module.exports = router;