const express = require("express");
const app = express();
const mongoose = require("mongoose");
let cors = require("cors");
let parser = require("body-parser");

mongoose.Promise = global.Promise;

let { Startup } = require("./User");
let { Admin } = require("./admin");

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(cors());

mongoose.connect("mongodb://localhost:27017/bookMgrDB", {
  useNewUrlParser: true
});

app.post("/", function(req, res) {
  let authCred = req.body;
  // let admin = new Admin(authCred);
  Admin.findById("5d860e3b9452665e581f5753")
    .then(function(data) {
      if (
        (data.adminName == authCred.adminName) &
        (data.passWord == authCred.passWord)
      ) {
        res.send("Success");
      }
    })
    .catch(function(err) {
      console.log(err);
      res.send(err);
    });
});

app.post("/userSignUp", function(req, res) {
  let data = req.body;
  let startUp = new Startup(data);
  startUp
    .save()
    .then(function(data) {
      console.log(data);
      res.send("Success");
    })
    .catch(function(err) {
      console.log(err);
      res.send(err);
    });
});

app.post("/userLogIn", function(req, res) {
  let startUp = req.body;
  Startup.findOne({ startupName: startUp.startupName })
    .then(function(data) {
      if (
        (data.startupName == startUp.startupName) &
        (data.passWord == startUp.passWord)
      ) {
        console.log("Logged in");
        res.json(true);
      }
    })
    .catch(function(err) {
      console.log(err);
      res.send(err);
    });
});

// app.post("/", function(req, res) {
//   let authCred = req.body;
//   console.log(authCred);

//   let admin = new Admin(authCred);
//   admin
//     .save()
//     .then(function(data) {
//       console.log(data);
//       res.send(data);
//     })
//     .catch(function(err) {
//       console.log(err);
//       res.send(err);
//     });
// });
app.listen(3000);
