// Welcomes the visitor with an alert
function welcome() {
  alert("Hello, my visitor. I hope you have a nice day!");
}
// Prompts the visitor for his/her name
function name_ask() {
  var name = prompt("Hey there, what's your name?");
  //Re-enter if nothing input
  if (name != "") {
    name_greeting(name);
  } else {
    alert("Please enter your name.");
    name_ask();
  }
}
// Displays the users name with an alert
function name_greeting(name) {
  alert("Hello, " + name + "!");
}
// Asks the visitor to enter two numbers with a prompt
function numbers() {
  var num1 = prompt("Please enter the first number: ");
  var num2 = prompt("Please enter the second number: ");
  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);
  //num1 and num2 is number or not
  if (isNaN(num1) == false && isNaN(num2) == false) {
    addTwo(num1, num2);
  } else {
    alert("Inputs wrong, please enter normal numbers.");
    numbers();
  }
}
// Concatenate the result of adding their two numbers together
function addTwo(num1, num2) {
  var add = num1 + num2;
  alert("The sum of your two numbers is: " + add);
  bigOrSmall(add);
}
// Conditional logic (if/else)
function bigOrSmall(number) {
  if (number > 10) {
    alert("That is a big number.");
    redo();
  } else {
    alert("That is a small number.");
    redo();
  }
}
// Prompt the user and ask if they want to add two numbers again
function redo() {
  // I used confirm function in here for Boolean; it can be changed to prompt as well
  var response = confirm("Hey there, do you want to try this one more time?");
  if (response) {
    numbers();
  } else {
    alert("Thank you");
  }
}
