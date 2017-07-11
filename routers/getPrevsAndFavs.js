const express = require('express');
const app = express();
const read = require('../methods/read');


app.get('/users/:username/orders/previous', function(req, res) {
    read({username: req.params.username}, function(err, listOfOrders) {
        res.json(listOfOrders);
        res.status(200);
    })
})

app.get('/users/:username/orders/favorites', function(req, res) {
    read({
        favorited: true,
        username: req.params.username
        }, function(err, listOfOrders) {
            res.json(listOfOrders);
            res.status(200);
    })
})

module.exports = app;
