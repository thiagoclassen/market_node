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
        let user = new User({ name: request.headers.name });
        user.save((error) => {
            if (error) {
                console.log(error);
                response.status(500).json('error: ' + JSON.stringify(error));
            } else {
                response.status(201).json('OK, ' + JSON.stringify(request.headers));

            }
        });
    });

module.exports = router;