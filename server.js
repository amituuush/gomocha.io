const http = require('http');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config/config');
const routes = require('./routers/routes');
const getPrevsAndFavs = require('./routers/getPrevsAndFavs');
const orders = require('./routers/orders');
const ordersOrdersId = require('./routers/ordersOrdersId');


/* ------------------DATABASE---------------------
------------------------------------------------*/

const MongoURI = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : config.MONGO_URL;

mongoose.Promise = global.Promise;
mongoose.connect(MongoURI);

mongoose.connection.once('open', function () {
  console.log('connection established!');
});

mongoose.connection.on('error', function (err) {
  console.error('Could not connect.  Error:', err);
});

/* ------------------MIDDLEWARE---------------------
------------------------------------------------*/
app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({
  type: '*/*'
}));
app.use('/api', [getPrevsAndFavs, orders, ordersOrdersId]);

routes(app);

const log = function () {
  console.log('app listening on port ' + config.PORT);
}

app.listen(config.PORT, log);
