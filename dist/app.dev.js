"use strict";

var express = require('express');

var hbs = require('hbs');

var Query = require('./src/models/query');

var path = require('path');

var app = express();
var port = process.env.PORT || 2412;
app.use(express.urlencoded({
  extended: true
}));

require('./src/db/connect');

var static_Path = path.join(__dirname, './public');
var templatepath = path.join(__dirname, 'public/templates/views');
var partialpath = path.join(__dirname, 'public/templates/partials');
app.set('view engine', 'hbs');
app.set('views', templatepath);
app.use(express.json());
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
app.post("/contact", function _callee(req, res) {
  var queryData;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          queryData = new Query(req.body);
          console.log(queryData);
          _context.next = 5;
          return regeneratorRuntime.awrap(queryData.save());

        case 5:
          result = _context.sent;
          console.log(result);
          res.status(201).render("contact");
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500).send(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
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