const express = require('express'),
    User = require('../schemas/user'),
    bodyParser = require('body-parser'),
    parseJson = bodyParser.json();

let router = express.Router();

router.route('/')
    .get((request, response) => {
        User.find((err, users) => {
            if (err) console.error(err);
            response.send(users);
        });
    })
    .post(parseJson, (request, response) => {
        let user = new User({ name: request.headers.name });
        user.save((error) => {
            if (error) console.error(error);
            response.status(201).json('Saved, ' + JSON.stringify(request.headers));

        });
    });

module.exports = router;