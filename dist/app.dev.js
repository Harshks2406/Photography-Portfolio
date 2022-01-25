"use strict";

var express = require('express');

var hbs = require('hbs');

var path = require('path');

var app = express();
var port = process.env.PORT || 2412;
var static_Path = path.join(__dirname, './public');
var view_path = path.join(__dirname, 'public/views');
app.set('view engine', 'hbs');
app.set('views', view_path);
app.use(express["static"](static_Path));
app.get("/", function (req, res) {
  res.render('index.hbs');
});
app.listen(port, function () {
  console.log("Server started on http://localhost:".concat(port));
});