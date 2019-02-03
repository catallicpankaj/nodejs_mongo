EsgModel = require('../models/esgDetailsModel.js');
exports.list_all_details = function(req,res){
    EsgModel.get(function(err,esgdata){
        if(err){
            res.json({
                serviceStatus:"Error",
                message:"Unexpected error occured"
            })
        }
        res.json({
            serviceStatus:"Success",
            message:"Esg Details retrieved successfully.",
            data: esgdata
        });
    });
}

exports.list_detail_by_stock_name=function(req,res){
    //'stock_name esg_score'
    EsgModel.find({'stock_name':req.params.stockname}, function (err, esgdetail) {
        if (err)
        res.json({
            serviceStatus:"Error",
            message:"Unexpected error occured"
        })
        res.json({
            message: 'esg details loading..',
            data: esgdetail
        });
    });
}

function generateTraceId(){

}