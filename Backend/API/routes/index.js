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

router.get('/users', function(req,res,next){
  console.log('API GET users');
  res.locals.connection.query('SELECT Username, UserMail, UserPhone, CountryName as Country, RoleName as Role FROM Users join Role on Users.RoleId = Role.RoleId JOIN Country ON Users.CountryId = Country.CountryId', function(error, results, fields) {
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

router.get('/projects', function(req,res,next){
  console.log('API GET PostProject');
  res.locals.connection.query('SELECT ProjectId, ProjectName, CategoryName as Category, CustomerName as Customer, StatusName as Status, TimeDone, description, DATE_FORMAT(StartDate, "%D %b %Y") as StartDate, DATE_FORMAT(EndDate, "%D %b %Y") as EndDate FROM Project JOIN Category ON Project.CategoryId = Category.CategoryId JOIN Status ON Project.StatusId = Status.StatusId JOIN Customers ON Project.CustomerID = Customers.CustomerId', function(error, results, fields) {
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

router.get('/category', function(req,res,next){
  console.log('API GET category');
  res.locals.connection.query('SELECT * FROM Category', function(error, results, fields) {
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

router.get('/country', function(req,res,next){
  console.log('API GET country');
  res.locals.connection.query('SELECT * FROM Country', function(error, results, fields) {
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

router.get('/programmes', function(req,res,next){
  console.log('API GET Programme');
  res.locals.connection.query('SELECT * FROM Programme', function(error, results, fields) {
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

router.get('/Tasks', function(req,res,next){
  console.log('API GET Task');
  res.locals.connection.query('SELECT * FROM Task', function(error, results, fields) {
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

router.get('/Status', function(req,res,next){
  console.log('API GET Status');
  res.locals.connection.query('SELECT * FROM Status', function(error, results, fields) {
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

router.get('/customers', function(req,res,next){
  console.log('API GET customers');
  res.locals.connection.query('SELECT CustomerId, CustomerName, CustomerSociety, CustomerPhone, CustomerMail, CountryName as Country  FROM Customers JOIN Country ON Customers.CountryId = Country.CountryId', function(error, results, fields) {
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

router.get('/affichage', function(req,res,next){
  console.log('API GET affichage');
  res.locals.connection.query('SELECT ProjectName,TaskName, CustomerName, StatusName, Work.TimeDone, DATE_FORMAT(StartDate, "%D %b %Y") as StartDate, DATE_FORMAT(EndDate, "%D %b %Y") as EndDate FROM Project JOIN Category ON Project.CategoryId = Category.CategoryId JOIN Status ON Project.StatusId = Status.StatusId JOIN Customers ON Project.CustomerID = Customers.CustomerId JOIN Work ON Project.ProjectId = Work.projectId JOIN Task ON Project.ProjectId = Task.ProjectId', function(error, results, fields) {
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

/* POST */

router.post('/postProject', function (req, res, next) {
  console.log(req.body);
  console.log('POST PostProject');
  res.locals.connection.query('INSERT INTO Project (ProjectName, CategoryId, CustomerId, StatusId, TimeDone, description, StartDate, EndDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',[req.body.formProjectName, req.body.formProjectCategoryId, req.body.formProjectCustomerId, 1, 0, req.body.formProjectDescription, req.body.formProjectStartDate, req.body.formProjectEndDate], function (error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log(error);

    }
    else {
      console.log("Project Created");
      res.send({"status":201, "error": null, "response":results});
    }
  });
});

router.post('/postTask', function (req, res, next) {
  console.log(req.body);
  console.log('POST TASK');
  res.locals.connection.query('INSERT INTO Task (TaskName, ProjectId, TimeDone, AssignedTime) VALUES (?, ?, ?, ?)',[req.body.formTaskName, req.body.formTaskProjectId, 0, req.body.formTaskAssignedTime], function (error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log(error);
    }
    else {
      console.log("Task Created");
      res.send({"status":201, "error": null, "response":results});
    }
  });
});

router.post('/postWork', function (req, res, next) {
  console.log(req.body);
  console.log('POST TASK');
  res.locals.connection.query('INSERT INTO Work (ProjectId, TaskId, UserId, TimeDone, AssignedTime) VALUES (?, ?, ?, ?, ?)',[req.body.formWorkProjectId, req.body.formWorkTaskId, req.body.formWorkUserId,0, formWorkAssignedTime], function (error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log(error);

    }
    else {
      console.log("Work Created");
      res.send({"status":201, "error": null, "response":results});
    }
  });
});

router.post('/postProgramme', function (req, res, next) {
  console.log(req.body);
  console.log('POST TASK');
  res.locals.connection.query('INSERT INTO Programme (ProgrammeName, ProjectId) VALUES (?, ?)',[req.body.formProgrammeName, req.body.formProgrammeProjectId], function (error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log(error);

    }
    else {
      console.log("Programme Created");
      res.send({"status":201, "error": null, "response":results});
    }
  });
});