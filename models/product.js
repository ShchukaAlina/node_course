const fs = require('fs');
const path = require('path');

let pathFile = path.join(path.dirname(process.mainModule.filename), 'data', 'productList.json');

const getDataFromFile = cb => {
    fs.readFile(pathFile, (err, content) => {
        if(err) return cb([])
        cb(JSON.parse(content))
    })
}

module.exports = class Product {
    constructor(title, imgUrl, price, description) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = Math.random().toString();
        getDataFromFile(products => {
            products.push(this)
            fs.writeFile(pathFile, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
        let pathFile = path.join(path.dirname(process.mainModule.filename), 'data', 'productList.json');
        fs.readFile(pathFile, (err, fileContent) => {
            let products = [];
            if(!err) {
                products = JSON.parse(fileContent)
            }
            products.push(this)
            fs.writeFile(pathFile, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
    }

    static findProdById(id, cb) {
        getDataFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        })
    }

    static fetchAll(cb) {
        getDataFromFile(cb)
    }
}