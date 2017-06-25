const express = require('express'),
    List = require('../schemas/list').Model,
    bodyParser = require('body-parser'),
    parseJson = bodyParser.json();

let router = express.Router();

router.route('/')
    .get((request, response) => {
        List.find((err, lists) => {
            if (err) console.error(err);
            response.send(lists);
        });
    })
    .post(parseJson, (request, response) => {
        let client = request.body.client,
            products = request.body.products,
            deliveryDate = request.body.deliveryDate,
            total = request.body.total,
            list = new List({ client, products, deliveryDate, total });

        list.save((error) => {
            if (error) console.error(error);
            response.status(201).json('Saved, ' + JSON.stringify(request.body));
        });
    });

module.exports = router;