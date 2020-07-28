const express = require('express');
const router = express.Router();
let reqData;

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {title: 'Express'});
});

// //este endpoint devuelve nombre
// router.get('/test/:name', function (req, res, next) {
// 	res.status(200).send('Esto es un test! ' + req.params.name); //TODO add validation on name
// });

router.use('/test:testId([123])', function (req, res, next) {
	console.log('testId: ' + req.params.testId);
	next();
});

router.get('/test1/:id/:name/:info', function (req, res, next) {
	reqData = {
		id: req.params.id,
		name: req.params.name,
		info: req.params.info
	};
	next();
})

router.get('/test2', function (req, res, next) {
	reqData = {
		id: req.query.id,
		name: req.query.name,
		info: req.query.info
	};
	next();
})

router.post('/test3', function (req, res, next) {
	reqData = req.body;
	next();
})

router.all(/^\/test[123].*/, function (req, res) {
	console.log('reqData: ', reqData);
	res.json(reqData);
});

module.exports = router;
