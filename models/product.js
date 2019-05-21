const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),
'data',
'products.json'
);

const getProductsFromFile = cb => {
    console.log(p);
    fs.readFile(p, (err, fileContent)=>{
        if(err) {
            cb([]);
        } else {
        cb(JSON.parse(fileContent));
    }
    })
}

module.exports = class Product {
    constructor(title, price, description, Image_URL) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.Image_URL = Image_URL;
    }
    save() {
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err);
            });
        }); 
    }
    static fetchAll(cb) {
        getProductsFromFile(cb);  
    }
}