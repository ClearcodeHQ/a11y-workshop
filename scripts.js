var submitButton = document.getElementById('submit-button');
submitButton.onclick = function() {
  alert("You submitted the form!");
  return false;
};

var buttons = document.getElementsByClassName('button');
for(var z = 0; z < buttons.length; z++) {
  var elem = buttons[z];
  elem.onclick = function() {
    alert("You clicked a button!");
    return false;
  };
}

var elem = document.querySelector('.js-switch');
var init = new Switchery(elem);