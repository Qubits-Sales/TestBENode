var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/test1', function (req, res, next) {
	return res.send("exito");
});

const http = require('http');

/**
 * Get port from environment and store in Express.
 */
const port = '3001';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
