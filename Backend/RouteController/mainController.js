const factoryFunction = require('../Utility/utility');
const productsModel = require('../Model/products');
const userModel = require('../Model/signup');

exports.get = factoryFunction.getting(productsModel); 
exports.post = factoryFunction.posting(productsModel);
exports.getUserdetails = factoryFunction.gettingSpecific(productsModel);
