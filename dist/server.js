"use strict";

var _express = _interopRequireDefault(require("express"));

var _cards = require("./controllers/cards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 9000; // import express, {
//   type $Application,
//   type $Request,
//   type $Response
// } from 'express'

var app = (0, _express.default)();
app.get('/', _cards.viewCard);
app.listen(PORT, function () {
  console.info("Server listening on PORT ".concat(PORT));
});