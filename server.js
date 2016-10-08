var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var calcRouter = require('./routes/calculate.js');

var app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  var filename = path.join(__dirname, 'public/views/index.html');
  res.sendFile(filename);
});

// ROUTERS
app.use('/type', calcRouter);

app.listen(3000);
