let router = require('express').Router();
var esgController = require('../controllers/esgDetailsController.js')
router.get('/health', function (req, res) {
    res.json({
       status: 'Success',
       message: 'Please use context paths to hit respective api(s).',
    });
});

//Export api routes

router.route('/details')
	.get(esgController.list_all_details);

router.route('/details/:stockname')
	.get(esgController.list_detail_by_stock_name);

module.exports = router;