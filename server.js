var http = require('http');
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config/config');
var routes = require('./routers/routes');
var getPrevsAndFavs = require('./routers/getPrevsAndFavs');
var orders = require('./routers/orders');
var ordersOrdersId = require('./routers/ordersOrdersId');


/* ------------------DATABASE--------------------- 
------------------------------------------------*/

var MongoURI = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : config.MONGO_URL;

mongoose.Promise = global.Promise;
mongoose.connect(MongoURI);

mongoose.connection.once('open', function() {
    console.log('connection established!');
});

mongoose.connection.on('error', function(err) {
    console.error('Could not connect.  Error:', err);
});


/* ------------------MIDDLEWARE--------------------- 
------------------------------------------------*/

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/api', getPrevsAndFavs);
app.use('/api', orders);
app.use('/api', ordersOrdersId);
routes(app);

var log = function() {
    console.log('app listening on port ' + config.PORT);
}

app.listen(config.PORT, log);
