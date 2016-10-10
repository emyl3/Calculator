var express = require('express');
var router = express.Router();

var result;
var operator;
var a;
var b;

router.get('/', function (req, res) {
  console.log(result);
  res.send(result.toString());
});

router.post('/multiply', function (req, res) {
  getValue(req.body.type, req.body.firstNum, req.body.secondNum);
  result = a * b;
  res.sendStatus(200);
});

router.post('/divide', function (req, res) {
  getValue(req.body.type, req.body.firstNum, req.body.secondNum);
  result = a / b;
  res.sendStatus(200);
});

router.post('/subtract', function (req, res) {
  getValue(req.body.type, req.body.firstNum, req.body.secondNum);
  result = a - b;
  res.sendStatus(200);
});

router.post('/add', function (req, res) {
  getValue(req.body.type, req.body.firstNum, req.body.secondNum);
  result = a + b;
  res.sendStatus(200);
});

function getValue(type, first, second) {
  operator = type;
  a = parseFloat(first);
  b = parseFloat(second);
}

module.exports = router;
