"use strict";

var mongoose = require("mongoose");

var _validator = require("validator");

var querySchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    validator: function validator(value) {
      if (!_validator.isEmail(value)) {
        window.alert("Invalid Email!");
      }
    }
  },
  comment: {
    type: String
  },
  date: {
    type: Date,
    "default": Date.now
  }
});
var Query = mongoose.model("Query", querySchema);
module.exports = Query;