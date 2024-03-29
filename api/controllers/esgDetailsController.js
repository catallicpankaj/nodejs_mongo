EsgModel = require('../models/esgDetailsModel.js');

exports.list_all_details = function(req, res) {
    EsgModel.get(function(err, esgdata) {
        if (err) {
            res.json({
                serviceStatus: "Error",
                message: "Unexpected error occured"
            })
        }
        res.json({
            serviceStatus: "Success",
            message: "Esg Details retrieved successfully.",
            data: esgdata,
            "traceId": generateTraceId().traceId,
            "spanId": generateTraceId().spanId
        });
    });
}

exports.list_detail_by_stock_name = function(req, res) {
    //'stock_name esg_score'
    var selectData = "stock_name esg_score E S G news earnings_call_transcript -_id";
    EsgModel.find({
        'stock_name': req.params.stockname
    }, selectData, function(err, esgdetail) {
        if (err) {
            res.json({
                serviceStatus: "Error",
                message: "Unexpected error occured"
            })
        }
        res.json({
            message: 'ESG details for Stock '+req.params.stockname,
            data: esgdetail,
            "traceId": generateTraceId().traceId,
            "spanId": generateTraceId().spanId
        });
    });
}

function generateTraceId() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    var uuidStrip = (uuid.substring(0, 8) + uuid.substring(9, 13) + uuid.substring(14, 18));
    var tracingInfoObj = {};
    tracingInfoObj.traceId = uuidStrip;
    tracingInfoObj.spanId = uuidStrip;
    return tracingInfoObj;
}