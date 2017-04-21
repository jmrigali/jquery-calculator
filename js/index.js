$(document).ready(function() {
var operator = ''
$('.buttons').click('span', function (event){
  var $target = $(event.target);
  var $screen = $('#screen');
  var htmlString = $target.html();

  if ($target.prop("tagName") === "DIV") {
    return;
  }
  else if($target.attr('id') === "clear") {
    operator = '';
    $screen.html('');
    return;
  } else if ($target.hasClass('operator')) {
    if ($target.html() === '=') {
      $screen.html(equation());
      operator = '';
      return;
    }
    if (operator.length > 0) {
      $screen.html('Error');
      return;
    }
    operator = $target.html();
  }

  $screen.append(htmlString).html();

});

function equation () {
  console.log('Running Equation');
  var something = $("#screen").html();
  var nums = something.split(operator);
  switch (operator) {
    case '+':
    return parseInt(nums[0]) + parseInt(nums[1]);
    case '-':
    return parseInt(nums[0]) - parseInt(nums[1]);
    case '÷':
    return parseInt(nums[0]) / parseInt(nums[1]);
    case 'x':
    return parseInt(nums[0]) * parseInt(nums[1]);
  }
}

});
