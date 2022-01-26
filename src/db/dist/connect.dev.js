"use strict";

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/photography", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Database Connection Successfull.");
})["catch"](function (err) {
  console.error(err);
});