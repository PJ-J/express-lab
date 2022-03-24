
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: false}));

let namePath = path.join(__dirname, '../formsubmissions.json')



app.post('/formsubmissions', (req, res, next) => {
  let arr = [];
  arr.push(req.body.name);
  fs.appendFileSync(namePath, JSON.stringify(arr));
  res.send(names);
  next();
})

let names = fs.readFileSync(namePath, {encoding: "utf-8"});
// console.log(names);

app.get('/formsubmissions', (req, res) => {
  
  res.send(names);
  
});

app.use(express.static(path.join(__dirname, '../public')));



app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
})



// app.get('/', (req, res) => {
//   res.send('Hello from the web server side...');
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// });

// app.get('/css/styles.css', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/css/styles.css'));
// })






app.listen(3000);