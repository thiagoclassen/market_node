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
        let client = new Client({ name: request.headers.name });
        let products = new Product({ name: request.headers.name, type: request.headers.type });


        let list = new List({ name: request.headers.name });

        response.status(201).json('OK, ' + JSON.stringify(request.body));
        // list.save((error) => {
        //     if (error) console.error(error);
        //     response.status(201).json('OK, ' + JSON.stringify(request.headers));

        // });
    });

module.exports = router;