'use strict';
var mongoose = require('mongoose');

var esgSchema = mongoose.Schema({
 _id:Object,
 id:String,
 stock_name: String,
 esg_score:String,
 E:String,
 S:String,
 G:String,
 earnings_call_transcript:Array,
 news:Array
}, {
    getters: true
  });

var EsgModel = module.exports=mongoose.model('esg',esgSchema,'esg');

esgSchema.virtual('StockName').get(function() { return this.stock_name; });
esgSchema.virtual('ESGScore').get(function() { return this.esg_score; });
esgSchema.set('toObject', { getters: true,virtuals: true });
module.exports.get = function (callback) {
    try{
    EsgModel.find({},'stock_name esg_score',callback).select("-_id");
    }catch(e){
        console.log(e);
    }
}