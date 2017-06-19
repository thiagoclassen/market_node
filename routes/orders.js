const express = require('express'),
    Order = require('../schemas/order'),
    bodyParser = require('body-parser'),
    parseJson = bodyParser.json();

let router = express.Router();

router.route('/')
    .get((request, response) => {
        response.send('teste');
    })
    .post(parseJson, (request, response) => {
        //let order = new Order();
        response.status(201).json('OK, ' + JSON.stringify(request.body));
    });

module.exports = router;