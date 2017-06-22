const express = require('express'),
    Client = require('../schemas/client').Model,
    bodyParser = require('body-parser'),
    parseJson = bodyParser.json();

let router = express.Router();

router.route('/')
    .get((request, response) => {
        Client.find((err, clients) => {
            if (err) console.error(err);
            response.send('OK: ' + clients);
        });
    })
    .post(parseJson, (request, response) => {
        let client = new Client({ name: request.headers.name });
        client.save((error) => {
            if (error) console.error(error);
            response.status(201).json('OK, ' + JSON.stringify(request.headers));

        });
    });

module.exports = router;