let router = require('express').Router();
var esgController = require('../controllers/esgDetailsController.js')
var graphController = require('../controllers/graphController.js')
router.get('/health', function (req, res) {
    res.json({
       status: 'Success',
       message: 'Please use context paths to hit respective api(s).',
    });
});

//Export api routes

router.route('/esg/details')
	.get(esgController.list_all_details);

router.route('/esg/details/:stockname')
	.get(esgController.list_detail_by_stock_name);

router.route('/graph/details')
    .get(graphController.list_all_graphdata);

router.route('/graph/details/:stockname')
    .get(graphController.list_graphdata_by_name);
module.exports = router;