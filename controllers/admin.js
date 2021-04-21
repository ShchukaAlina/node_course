const Product = require('../models/product');

exports.getAddProducts = (req, res) => {
    res.render("admin/add-product", {
        docTitle: "Add product",
        path: "/admin/add-product"
    })
}

exports.getProduct = (req, res) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prod: products,
            docTitle: 'Admin Products',
            path: '/admin/products'
        });
    });
}

exports.postAddProducts = (req, res) => {
    const { title, imgUrl, price, description } = req.body;
    const product = new Product(title, imgUrl, price, description )
    product.save();
    res.redirect('/');
}