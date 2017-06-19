const express = require('express'),
    Client = require('../schemas/client'),
    bodyParser = require('body-parser'),
    parseJson = bodyParser.json();

let router = express.Router();

router.route('/')
    .get((request, response) => {
        response.send('teste');
    })
    .post(parseJson, (request, response) => {
        let client = new Client({ name: request.body.name });
        response.status(201).json('OK, ' + JSON.stringify(request.body));
    });

module.exports = router;