var express = require('express');
var router = express.Router();

var orders = []


router.get('/', function(req, res, next) {
	res.render('index', {orders});
});

router.get('/form', function(req, res, next) {
	//console.log(req.query)
	res.render('form', {});
});

router.post('/form', function(req, res, next) {
	orders.push({
		name: req.body.client,
		food: req.body.foodName
	})

	//res.render('form', {});
	res.status(202).send('Order is made')
	//res.redirect('/')
});

module.exports = router;
