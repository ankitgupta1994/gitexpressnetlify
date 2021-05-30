'use strict';
// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("../public/authentication.js", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

module.exports.handler = serverless(app);

app.listen(3000, () => console.log('Local app listening on port 3000!'));
