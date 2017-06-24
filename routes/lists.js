const express = require('express'),
    List = require('../schemas/list').Model,
    Client = require('../schemas/client').Model,
    Product = require('../schemas/product').Model,
    bodyParser = require('body-parser'),
    parseJson = bodyParser.json();

let router = express.Router();

router.route('/')
    .get((request, response) => {
        List.find((err, lists) => {
            if (err) console.error(err);
            response.send('OK: ' + lists);
        });
    })
    .post(parseJson, (request, response) => {
        let client = request.body.client;
        let products = request.body.products;
        let deliveryDate = request.body.deliveryDate;
        let total = request.body.total;

        console.log(client.name);
        console.log(products);
        console.log(deliveryDate);
        console.log(total);

        let list = new List(client, products, deliveryDate, total);

        response.status(201).json('OK, ' + JSON.stringify(list));
        // list.save((error) => {
        //     if (error) console.error(error);
        //     response.status(201).json('OK, ' + JSON.stringify(request.headers));

        // });
    });

module.exports = router;