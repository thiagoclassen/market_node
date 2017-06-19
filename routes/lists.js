const express = require('express'),
    List = require('../schemas/list'),
    bodyParser = require('body-parser'),
    parseJson = bodyParser.json();

let router = express.Router();

router.route('/')
    .get((request, response) => {
        response.send('teste');
    })
    .post(parseJson, (request, response) => {
        //let list = new List();
        response.status(201).json('OK, ' + JSON.stringify(request.body));
    });

module.exports = router;