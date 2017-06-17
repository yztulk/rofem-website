var express = require('express');
var app = express();
var path = require('path');
var fs = require("fs");

app.use(express.static(path.join(__dirname, '/metronic')));

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log('Listening on ' + port);
});
