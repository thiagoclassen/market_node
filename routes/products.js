const express = require('express'),
    Product = require('../schemas/product').Model,
    bodyParser = require('body-parser'),
    parseJson = bodyParser.json();

let router = express.Router();

router.route('/')
    .get((request, response) => {
        Product.find((err, products) => {
            if (err) console.error(err);
            response.send(products);
        });
    })
    .post(parseJson, (request, response) => {
        console.log(request.body);
        let product = new Product({ name: request.body.name, unit: request.body.unit });
        product.save((error) => {
            if (error) console.error(error);
            response.status(201).json('Saved, ' + product);

        });
    });

module.exports = router;