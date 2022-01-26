"use strict";

var express = require('express');

var hbs = require('hbs');

var path = require('path');

var app = express();
var port = process.env.PORT || 2412;
var static_Path = path.join(__dirname, './public');
var templatepath = path.join(__dirname, 'public/templates/views');
var partialpath = path.join(__dirname, 'public/templates/partials');
app.set('view engine', 'hbs');
app.set('views', templatepath);
hbs.registerPartials(partialpath);
app.use(express["static"](static_Path));
app.get("/", function (req, res) {
  res.render('index.hbs');
});
app.get("/about", function (req, res) {
  res.render('about.hbs');
});
app.get("/photography101", function (req, res) {
  res.render('photography.hbs');
});
app.get("/contact", function (req, res) {
  res.render('contact.hbs');
});
app.get("/bird", function (req, res) {
  res.render('bird.hbs');
});
app.get("/portrait", function (req, res) {
  res.render('portrait.hbs');
});
app.get("/nature", function (req, res) {
  res.render('nature.hbs');
});
app.get("/monument", function (req, res) {
  res.render('monument.hbs');
});
app.get("/wildlife", function (req, res) {
  res.render('wildlife.hbs');
});
app.get("/BW", function (req, res) {
  res.render('BW.hbs');
});
app.get("/random", function (req, res) {
  res.render('random.hbs');
});
app.listen(port, function () {
  console.log("Server started on http://localhost:".concat(port));
});