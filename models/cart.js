const fs = require('fs');
const path = require('path');

let pathFile = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

module.exports = class Cart{
    static addProduct(id, productPrice) {
        fs.readFile(pathFile, (err, content) => {
            let cart = {product: [], totalPrice: 0};
            if (!err) {
                cart = JSON.parse(content);
            }
            // is this product exist
            const existingProductIndex = cart.product.findIndex(p => p.id === id);
            const existingProduct = cart.product[existingProductIndex];
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.product = [...cart.product];
                cart.product[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = {id: id, qty: 1};
                cart.product = [...cart.product, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(pathFile, JSON.stringify(cart), err => console.log(err))
        });
    }
    static deleteProduct(id, price) {
        fs.readFile(pathFile, (err, fileContent) => {
            if(err) {
                return;
            }
            const updatedCart = {...JSON.parse(fileContent)};
            const product = updatedCart.product.find(p => p.id === String(id));
            if(!product) return;
            updatedCart.product = updatedCart.product.filter(prod => prod.id !== id);
            updatedCart.totalPrice = updatedCart.totalPrice - price * product.qty;
            fs.writeFile(pathFile, JSON.stringify(updatedCart), err => console.log(err))
        })
    }
    static getCart(cb) {
        fs.readFile(pathFile, (err, fileContent) => {
            const cart = JSON.parse(fileContent);
            if(err) return cb(null)
            else cb(cart);
        })
    }
}