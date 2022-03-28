const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const { info } = require("console");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

//below is the thing from step 3 in the required section, just commented it out so I could do the other stuff after

// app.get('/', (req, res) => {
//   res.send('Hello from the web server side...');
//  });

app.use(express.static(path.join(__dirname, "../public")));

let namePath = path.join(__dirname, "../formsubmissions.json");

app.post("/formsubmissions", (req, res, next) => {
  let formArr = [];
  let formObj = {
    name: req.body.name,
    email: req.body.email,
  };
  formArr.push(formObj);
  // from the walkthru
  // just go to repo after
  fs.appendFileSync(namePath, JSON.stringify(formArr));
  let submissions = fs.readFileSync(namePath, { encoding: "utf-8" });
  res.send(submissions);
  next();
});

app.listen(3000);
