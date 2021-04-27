const Product = require('../models/product');

exports.getAddProducts = (req, res) => {
    res.render("admin/edit-product", {
        docTitle: "Add product",
        path: "/admin/add-product",
        edit: false
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

exports.getEditProduct = (req, res) => {
    const editMode = req.query.edit;
    if(!editMode) {
        return res.redirect("/");
    }
    const {productId} = req.params
    Product.findProdById(productId, product => {
        if(!product) console.log("Error");
        res.render('admin/edit-product', {
            docTitle: "Edit product",
            path: "/admin/edit-product",
            edit: editMode,
            product: product
        })
    })
}

exports.postEditProduct = (req, res) => {
    const { productId, title, price, description, imgUrl } = req.body;
    const updatedProduct = new Product(productId, title, imgUrl, price, description);
    console.log(updatedProduct);
    updatedProduct.save();
    res.redirect('/admin/products');
}

exports.postAddProducts = (req, res) => {
    const { title, imgUrl, price, description } = req.body;
    const product = new Product(null, title, imgUrl, price, description )
    product.save();
    res.redirect('/');
}

exports.postDeleteProduct = (req, res) => {
    const {productId} = req.body;
    Product.deleteById(productId);
    res.redirect('/admin/products');
}
