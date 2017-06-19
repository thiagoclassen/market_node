const express = require('express'),
    User = require('../schemas/user'),
    bodyParser = require('body-parser'),
    parseJson = bodyParser.json();

let router = express.Router();

router.route('/')
    .get((request, response) => {
        response.send('teste');
    })
    .post(parseJson, (request, response) => {
        let user = new User({ name: request.body.name });
        response.status(201).json('OK, ' + JSON.stringify(request.body));
    });

module.exports = router;