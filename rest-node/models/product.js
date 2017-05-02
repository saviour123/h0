var restful = require('node-restful');
var mongoose = restful.mongoose;


// schema
mongoose.Promise = global.Promise;
var productSchema = new mongoose.Schema({
    name: String,
    sku: String,
    price: Number
});

// return model
module.exports = restful.model('Products', productSchema);
