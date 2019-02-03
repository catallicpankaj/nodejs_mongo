'use strict';
var mongoose = require('mongoose');

var graphSchema=mongoose.Schema({
_id:Object,
stock_name:String,
esg_intensity:String,
stock_price_variation:String
});

var GraphModel = module.exports=mongoose.model('graph',graphSchema,'graph');

module.exports.get = function (callback) {
    GraphModel.find(callback).select("-_id -id");
}
