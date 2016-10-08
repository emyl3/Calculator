var input = { firstNum: '', secondNum: '', type: '' };
var numString = '';
var viewport;

$(function () {
  $('button').on('click', calculations);
  $('.clear').on('click', clearViewport);
});

function clearViewport() {
  input.firstNum = '';
  input.secondNum = '';
  input.type = '';
  numString = '';
  $('.viewport').text('');
}

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
        sendValues();
      }

      numString = '';
      break;
  }
  return input;
}

function sendValues() {
  $.ajax({
    type: 'POST',
    url: '/type/' + input.type,
    data: input,
    success: getCalculation,
  });
}

function getCalculation() {
  $.ajax({
    type: 'GET',
    url: '/type',
    success: function (response) {
      $('.viewport').text(response);
    },
  });
}
