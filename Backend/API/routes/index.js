var express = require('express');
var router = express.Router();
var request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET */

router.get('/test', function(req,res,next){
  console.log('API test');
  res.locals.connection.query('SELECT * FROM Users', function(error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log("erreur querry");
    }
    else {
      res.send({"status": 200, "error": null, "response": results});
      console.log("query OK");
    }
  });
});

router.get('/Users',  function (req,rest,next){
  console.log('API Get User');
  res.locals.connection.query('SELECT Username, Passwd FROM Users', function(error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log("erreur querry");
    }
    else {
      res.send({"status": 200, "error": null, "response": results});
      console.log("query OK");
    }
  });
});

router.get('/Project',  function (req,rest,next){
  console.log('API Get project');
  res.locals.connection.query('SELECT * FROM Projects', function(error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log("erreur querry");
    }
    else {
      res.send({"status": 200, "error": null, "response": results});
      console.log("query OK");
    }
  });
});

router.get('/programme',  function (req,rest,next){
  console.log('API Get programme');
  res.locals.connection.query('SELECT * FROM Users', function(error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log("erreur querry");
    }
    else {
      res.send({"status": 200, "error": null, "response": results});
      console.log("query OK");
    }
  });
});

router.get('/programme',  function (req,rest,next){
  console.log('API Get programme');
  res.locals.connection.query('SELECT * FROM Users', function(error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log("erreur querry");
    }
    else {
      res.send({"status": 200, "error": null, "response": results});
      console.log("query OK");
    }
  });
});

module.exports = router;

