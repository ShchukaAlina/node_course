const Product = require('../models/product');
const Cart = require('../models/cart');

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

exports.getProdById = (req, res) => {
    const { productId } = req.params;
    Product.findProdById(productId, product => {
        console.log(product);
        res.render("shop/product-details", { docTitle:"Title", path: "/products", product: product})
    })
}

exports.getCart = (req, res) => {
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProduct = [];
            for (prod of products) {
                const cartData = cart.product.find(p => p.id === prod.id);
                if(cartData) {
                    cartProduct.push({productData: prod, qty: cartData.qty});
                }
            }
            res.render("shop/cart", { docTitle: "Cart", path: "/cart", products: cartProduct});
        })
    })
}

exports.postCart = (req, res) => {
    const { productId } = req.body;
    Product.findProdById(productId, product => {
        Cart.addProduct(productId, product.price);
    })
    res.redirect("/cart");
}

exports.postCartDeleteProduct = (req, res) => {
    const { productId } = req.body;
    Product.findProdById(productId, product => {
        Cart.deleteProduct(productId, product.price);
        res.redirect('/cart');
    })
}

exports.getOrders = (req, res) => {
    res.render("shop/orders", { docTitle: "Orders", path: "/cart"});
}

exports.getCheckout = (req, res) => {
    res.render("shop/checkout", { docTitle: "Checkout", path: "/checkout"});
}