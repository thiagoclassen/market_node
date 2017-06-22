const express = require('express'),
    Product = require('../schemas/product').Model,
    bodyParser = require('body-parser'),
    parseJson = bodyParser.json();

let router = express.Router();

router.route('/')
    .get((request, response) => {
        Product.find((err, products) => {
            if (err) console.error(err);
            response.send('OK: ' + products);
        });
    })
    .post(parseJson, (request, response) => {
        let product = new Product({ name: request.headers.name, type: request.headers.type });
        product.save((error) => {
            if (error) console.error(error);
            response.status(201).json('OK, ' + product);

        });
    });

module.exports = router;