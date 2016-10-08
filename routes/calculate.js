var express = require('express');
var router = express.Router();

var result;
var operator;

router.get('/', function (req, res) {
  console.log(result);
  res.send(result.toString());
});

router.post('/', function (req, res) {
  operator = req.body.type;
  var a = parseFloat(req.body.firstNum);
  var b = parseFloat(req.body.secondNum);

  switch (operator){
    case 'multiply':
      result = a * b;
      break;

    case 'divide':
      result = a / b;
      break;

    case 'subtract':
      result = a - b;
      break;

    case 'add':
      result = a + b;
      break;
  }
  res.sendStatus(200);
});

module.exports = router;
