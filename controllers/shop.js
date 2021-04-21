const Product = require('../models/product');

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render("shop/product-list", {docTitle: "Shop", prod: products, path: "/"});
    });
}

exports.getIndex = (req, res) => {
    Product.fetchAll((products) => {
        res.render("shop/index", {docTitle: "Shop", prod: products, path: "/"});
    });
}

exports.getCart = (req, res) => {
    res.render("shop/cart", { docTitle: "Cart", path: "/cart"});
}

exports.getOrders = (req, res) => {
    res.render("shop/orders", { docTitle: "Orders", path: "/cart"});
}

exports.getCheckout = (req, res) => {
    res.render("shop/checkout", { docTitle: "Checkout", path: "/checkout"});
}