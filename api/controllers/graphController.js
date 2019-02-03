GraphModel = require('../models/graphModel.js');

exports.list_all_graphdata = function(req, res) {
    GraphModel.get(function(err, graphData) {
        if (err) {
            res.json({
                serviceStatus: "Error",
                message: "Unexpected error occured"
            })
        }
        res.json({
            serviceStatus: "Success",
            message: "Graph Details retrieved successfully.",
            data: graphData,
            "traceId": generateTraceId().traceId,
            "spanId": generateTraceId().spanId
        });
    });
}

exports.list_graphdata_by_name = function(req, res) {
    //'stock_name esg_score'
    var selectData = "-_id -id";
    GraphModel.find({
        'stock_name': req.params.stockname
    }, selectData, function(err, graphDetailByName) {
        if (err) {
            res.json({
                serviceStatus: "Error",
                message: "Unexpected error occured"
            })
        }
        res.json({
            message: 'Graph details',
            data: graphDetailByName,
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