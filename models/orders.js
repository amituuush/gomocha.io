const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema({
    username: String,
    items: Array,
    specialInstructions: String,
    selectedShop: String,
    selectedShop_id: String,
    favorited: Boolean,
    date: String,
    time: String,
    selectedPickupTime: String,
    completed: Boolean
});

const Orders = mongoose.model('Order', orderSchema);

module.exports = Orders;

/*

admin roles -> restaurant Model -> subschema/document(menu)

embedded vs references/relations

*/
