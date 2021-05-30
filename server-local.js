'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/public/authentication.js', (req, res) => {
  res.send("<h1>Hello World!</h1>")
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports.handler = serverless(app);

app.listen(3000, () => console.log('Local app listening on port 3000!'));
