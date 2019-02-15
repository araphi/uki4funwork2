// // const express        = require('express');
// const MongoClient    = require('mongodb').MongoClient;
// const bodyParser     = require('body-parser');
// const db             = require('./config/db');
// //
// const app            = express();
//
// const port = 8000;
//
// app.use(bodyParser.urlencoded({ extended: true }));
//
// MongoClient.connect(db.url, (err, database) => {
//   if (err) return console.log(err)
//   require('./app/routes')(app, database);

//   app.listen(port, () => {
//     console.log('We are live on ' + port);
//   });
// })

var express = require("express");
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const port = process.env.PORT || 8000;
// var path = require("path");
const app = express();//all routes start with /app will be redirected to app folder as public
app.use("/app", express.static(__dirname + '/app'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.get("", function (req,res) {
//  res.sendfile('app/view/index.html');
// });
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})
// var server = app.listen(8000, function() {
//    console.log(new Date().toISOString() + ": server started on port 8000");
// });
