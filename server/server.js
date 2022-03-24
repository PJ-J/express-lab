const express = require('express');
const path = require('path');
let app = express();

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
})

// app.get('/', (req, res) => {
//   // res.send('Hello from the web server side...');
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// });

// app.get('/css/styles.css', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/css/styles.css'));
// })

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/order/:id', (req, res) => {
//   let id = req.params.id;
//   res.send(id);
// })

app.listen(3000);