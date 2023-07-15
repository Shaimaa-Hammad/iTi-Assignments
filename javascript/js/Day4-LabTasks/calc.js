// Define variables
var num1 = "";
var num2 = "";
var operator = "";
var screen = document.getElementById("Answer");

// Function to enter numbers
function EnterNumber(number) {
  if (operator === "") {
    num1 += number;
    screen.value = num1;
  } else {
    num2 += number;
    screen.value = num1 + operator + num2;
  }
}

// Function to enter operators
function EnterOperator(op) {
  operator = op;
  screen.value = num1 + operator;
}

// Function to perform calculation
function EnterEqual() {
  var result;
  switch (operator) {
    case "+":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      result = parseFloat(num1) / parseFloat(num2);
      break;
  }
  screen.value = result;
  num1 = result.toString();
  num2 = "";
  operator = "";
}

// Function to clear screen
function EnterClear() {
  num1 = "";
  num2 = "";
  operator = "";
  screen.value = "";
}
