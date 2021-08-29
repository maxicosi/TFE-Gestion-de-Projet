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
  res.locals.connection.query('SELECT UserId, Username, UserMail, UserPhone, RoleName as Role FROM Users join Role on Users.RoleId = Role.RoleId', function(error, results, fields) {
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
  res.locals.connection.query('SELECT ProjectId, ProjectName, CategoryName as Category, CustomerName as Customer, StatusName as Status, TimeDone, description, DATE_FORMAT(StartDate, "%d %m %Y") as StartDate, DATE_FORMAT(EndDate, "%d %m %Y") as EndDate FROM Project JOIN Category ON Project.CategoryId = Category.CategoryId JOIN Status ON Project.StatusId = Status.StatusId JOIN Customers ON Project.CustomerID = Customers.CustomerId', function(error, results, fields) {
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

router.get('/works', function(req,res,next) {
  let task_id = req.query.TaskId;
  console.log('API GET Work');
  if (task_id != undefined) {
    console.log('test Task' + task_id);
    res.locals.connection.query('SELECT w.TaskId, t.TaskName, Username, w.AssignedTime, w.TimeDone, DATE_FORMAT(w.StartDate, "%d %m %Y") as StartDate, DATE_FORMAT(w.EndDate, "%d %m %Y") as EndDate FROM Work as w JOIN Users as u ON w.UserId = u.UserId JOIN Task as t ON w.TaskId = t.TaskId WHERE w.TaskId=?', [task_id], function (error, results, fields) {
      if (error != null) {
        res.redirect(529, '/error');
        console.log("erreur querry");
      } else {
        res.send({"status": 200, "error": null, "response": results});
        console.log("query OK");
      }
    });
  } else {
    res.locals.connection.query('SELECT * FROM Work', function (error, results, fields) {
      if (error != null) {
        res.redirect(529, '/error');
        console.log("erreur querry");
      } else {
        res.send({"status": 200, "error": null, "response": results});
        console.log("query OK");
      }
    })
  }
});

router.get('/Tasks', function(req,res,next){
  let project_id = req.query.ProjectId;
  let task_id = req.body.TaskId
  console.log('API GET Task');
  if (project_id != undefined) {
    res.locals.connection.query('SELECT TaskId, TaskName, AssignedTime, TimeDone, DATE_FORMAT(StartDate, "%d %m %Y") as StartDate, DATE_FORMAT(EndDate, "%d %m %Y") as EndDate  FROM Task Where ProjectId=?', [project_id], function(error, results, fields) {
      if (error!=null) {
        res.redirect(529, '/error');
        console.log("erreur querry");
      }
      else {
        res.send({"status": 200, "error": null, "response": results});
        console.log("query OK");
      }
    });
  } else if (task_id != undefined) {
    res.locals.connection.query('SELECT TaskId, TaskName, AssignedTime, TimeDone, DATE_FORMAT(StartDate, "%d %m %Y") as StartDate, DATE_FORMAT(EndDate, "%d %m %Y") as EndDate  FROM Task Where TaskId=?', [task_id], function(error, results, fields) {
      if (error!=null) {
        res.redirect(529, '/error');
        console.log("erreur querry");
      }
      else {
        res.send({"status": 200, "error": null, "response": results});
        console.log("query OK");
      }
    });
  } else {
  res.locals.connection.query('SELECT * FROM Task', function(error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log("erreur querry");
    }
    else {
      res.send({"status": 200, "error": null, "response": results});
      console.log("query OK");
    }
  })}
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
  res.locals.connection.query('SELECT CustomerId, CustomerName, CustomerSociety, CustomerPhone, CustomerMail FROM Customers', function(error, results, fields) {
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
  let project_id = req.query.ProjectId;

  if (project_id != undefined){
    console.log('Get affichage by id' + project_id)
    res.locals.connection.query('SELECT ProjectId, ProjectName, CategoryName as Category, StatusName as Status, TimeDone, DATE_FORMAT(StartDate, "%d %m %Y") as StartDate, DATE_FORMAT(EndDate, "%d %m %Y") as EndDate, description FROM Project JOIN Category ON Project.CategoryId = Category.CategoryId JOIN Status ON Project.StatusId = Status.StatusId WHERE ProjectId=?', [project_id],function(error, results, fields) {
      if (error!=null) {
        res.redirect(529, '/error');
        console.log("erreur querry");
      }
      else {
        res.send({"status": 200, "error": null, "response": results});
        console.log("query OK");
      }
    });
  } else {
    res.locals.connection.query('SELECT ProjectId, ProjectName, CategoryName as Category, StatusName as Status, TimeDone, DATE_FORMAT(StartDate, "%d %m %Y") as StartDate, DATE_FORMAT(EndDate, "%d %m %Y") as EndDate, description FROM Project JOIN Category ON Project.CategoryId = Category.CategoryId JOIN Status ON Project.StatusId = Status.StatusId', function(error, results, fields) {
      if (error!=null) {
        res.redirect(529, '/error');
        console.log("erreur querry");
      }
      else {
        res.send({"status": 200, "error": null, "response": results});
        console.log("query OK");
      }
    });
  }
  });

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
  res.locals.connection.query('INSERT INTO Task (TaskName, ProjectId, TimeDone, AssignedTime, StartDate, EndDate) VALUES (?, ?, ?, ?, ?, ?)',[req.body.formTaskName, req.body.formTaskProjectId, 0, req.body.formTaskAssignedTime, req.body.formTaskStartDate, req.body.formTaskEndDate], function (error, results, fields) {
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
  console.log('POST work');
  res.locals.connection.query('INSERT INTO Work (ProjectId, TaskId, UserId, AssignedTime, TimeDone, StartDate, EndDate) VALUES (?, ?, ?, ?, ?, ?, ?)',[req.body.formWorkProjectId, req.body.formWorkTaskId, req.body.formWorkUserId, req.body.formWorkAssignedTime, 0, req.body.formWorkStartDate, req.body.formWorkEndDate], function (error, results, fields) {
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

module.exports = router;