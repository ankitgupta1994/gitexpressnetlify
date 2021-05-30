'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("../public/authentication.js", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

module.exports = app;
module.exports.handler = serverless(app);
