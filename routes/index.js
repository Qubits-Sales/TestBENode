var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

//este endpoint devuelve nombre
router.get('/test/:name', function (req, res, next) {
  res.status(200).send('Esto es un test! ' + req.params.name); //TODO add validation on name
});

module.exports = router;
