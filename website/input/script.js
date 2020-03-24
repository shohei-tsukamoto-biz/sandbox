$(function() {
  var $input = $("#test-input");
  var $output = $("#output");
  var changelog = "";
  var timer;
  var renderlog = () => {
    $output.append(changelog);
    $output.scrollTop($output[0].scrollHeight);
    changelog = "";
  }


  $input.on('keyup', function(e) {
    changelog += '<p class="bg-blue">keyup: ' + e.keyCode + '</p>';
    changelog += '<p class="bg-blue">keyup: ' + $input.val() + '</p>'
    clearTimeout(timer);
    timer = setTimeout(() => renderlog(), "200");
  });

  $input.on('keydown', function(e) {
    changelog += '<p class="bg-green">keydown: ' + e.keyCode +'</p>';
    clearTimeout(timer);
    timer = setTimeout(() => renderlog(), "200");
  });

  $input.on('change', function(e) {
    changelog += '<p class="bg-red">change: ' + $input.val() +'</p>';
    clearTimeout(timer);
    timer = setTimeout(() => renderlog(), "200");
  });

  $input.on('input', function(e) {
    changelog += '<p class="bg-yellow">input: ' + e.keyCode +'</p>';
    changelog += '<p class="bg-yellow">input: ' + $input.val() +'</p>';
    clearTimeout(timer);
    timer = setTimeout(() => renderlog(), "200");
  });
})