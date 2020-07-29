const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();
let data = {};
const port = 3002;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

app.get('/', (req, res) => res.send('Server started on port 3002 successfully!'));

app.get('/test1', function (req, res) {
	return res.send("Test 1 fue un éxito!");
});

app.get('/franz/test1/:id/:name/:info', function (req, res) {
	data = {
		id: req.params.id,
		name: req.params.name,
		info: req.params.info
	};
	res.send(data);
	console.log(data);
});

app.get('/franz/test2', function (req, res) { //query: ?id=2&name=q
	data = {
		id: req.query.id,
		name: req.query.name,
		info: req.query.info
	};
	res.send(data);
	console.log(data);
});

app.post('/franz/test3', function (req, res) {
	res.send(req.body); //same as res.json(req.body);
	console.log(req.body);
});

module.exports = app;
