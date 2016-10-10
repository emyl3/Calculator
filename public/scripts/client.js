var input = { firstNum: '', secondNum: '', type: '' };
var numString = '';
var viewport;

$(function () {
  $('button').on('click', calculations);
  $('.clear').on('click', clearViewport);
});

//clears the viewport
function clearViewport() {
  input.firstNum = '';
  input.secondNum = '';
  input.type = '';
  numString = '';
  $('.viewport').text('0');
}

//makes the calculations
function calculations() {
  var buttonType = $(this).data('type');
  var buttonValue = $(this).data('value');

  switch (buttonType) {
    case 'digit':
      numString += buttonValue;
      $('.viewport').text(numString);
      break;

    case 'operator':
      if (buttonValue === '.') {
        numString += '.';
        $('.viewport').text(numString);
        break;

      } else if (input.firstNum === '' && input.secondNum === '') {
        input.firstNum = numString;
        input.type = buttonValue;
        $('.viewport').text(input.firstNum);
        numString = '';

      } else if (buttonValue === '=') {
        input.secondNum = numString;
        $('.viewport').text(input.secondNum);
        sendValues(input.type);
      }

      numString = '';
      break;
  }
  return input;
}

//makes an ajax post request of the values inputed by the user
function sendValues(type) {
  $.ajax({
    type: 'POST',
    url: '/type/' + type,
    data: input,
    success: getCalculation,
  });
}

//makes an ajax get request of the calculated result
function getCalculation() {
  $.ajax({
    type: 'GET',
    url: '/type',
    success: function (response) {
      $('.viewport').text(response);
    },
  });
}
