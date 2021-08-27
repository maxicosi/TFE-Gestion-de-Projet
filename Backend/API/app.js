var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(function (req, res, next) {
  res.locals.connection = mysql.createConnection({
    host     : '62.210.130.145',
    //host     : 'localhost',
    user     : 'projetI',
    //user       : 'root',
    password : 'Integration7',
    //password   : '',
    database : 'NeedHelpV2'
    //database : 'needhelp'
  });
  res.locals.connection.connect(function(error){
    if(error){
      //res.render('error', {message:"Impossible de se connecter à la base de données"});
    }
    else {
      //res.locals.connection.connect();
      next();
    }
  });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


