const express = require('express'),
    Order = require('../schemas/order'),
    bodyParser = require('body-parser'),
    parseJson = bodyParser.json();

let router = express.Router();

router.route('/')
    .get((request, response) => {
        Order.find().lean().exec((err, orders) => {
            if (err) console.error(err);
            response.send(orders);
        });
    })
    .post(parseJson, (request, response) => {
        let lists = request.body.lists,
            deliveryDate = request.body.deliveryDate,
            total = request.body.deliveryDate;

        let order = new Order({ lists, deliveryDate, total });
        order.save((error) => {
            if (error) console.error(error);
            response.status(201).json('Saved, ' + JSON.stringify(request.body));
        });
    });

module.exports = router;