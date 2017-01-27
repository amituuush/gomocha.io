const express = require('express');
const app = express();
const Orders = require('../models/orders');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const create = require('../methods/create');
const read = require('../methods/read');

app.get('/orders', function(req,res) {
    read({}, function(err, listOfOrders) {
        if (err) {
            res.json(err)
        }
        res.json(listOfOrders);
        res.status(200);
    })
})

app.post('/orders', function(req, res) {
    create(req.body, function(err, order) {
        res.json(order);
        res.status(201);
    });
})

app.delete('/orders', function(req, res) {
    Orders.remove({}, function(err) {
        console.log('collection removed');
        res.json('collection removed')
        res.status(200);
    });
})

module.exports = app;
