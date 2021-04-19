const fs = require('fs');
const path = require('path');

const Product = require('../models/product');

exports.getAddProducts = (req, res) => {
    res.render("add-product", {docTitle: "Add product", path: "/admin/add-product"})
}

exports.postAddProducts = (req, res) => {
    const product = new Product(req.body.title)
    let pathFile = path.join(process.mainModule.filename)
    res.redirect('/');
}

exports.getProducts = (req, res) => {
    const products = Product.fetchAll();
    res.render("shop", {docTitle: "Shop", prod: products, path: "/"})
}