//Task1
// Prompt the user for a message
var message = prompt("Please enter a message:");

for (var i = 1; i <= 6; i++) {
  document.write("<h" + i + ">" + message + " " + i + "</h" + i + ">");
}
/////////////////////////////////////////////////////////////////////////////////

//Task2
var sum = 0;
var input;
var numberInput;

// Loop until the user enters 0
while (numberInput !== 0) {
  input = prompt("Please enter a number (enter 0 to stop):");
  numberInput = Number(input);

  // Check if the value is a valid number
  if (input === "") {
    alert("(" + input + ") is not a valid number. Please try again.");
  } else if (numberInput !== 0 && !isNaN(numberInput)) {
    sum += numberInput;
  } else if (numberInput !== 0) {
    alert("(" + input + ") is not a valid number. Please try again.");
  }
}

// Output the sum
document.write("The sum of your numbers is " + sum + "." + "\n");
///////////////////////////////////////////////////////////////////////////////////

//Task3.1
// Function to check if a string is a palindrome
function isPalindrome(str, considerCase) {
  if (!considerCase) {
    str = str.toLowerCase();
  }

  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Prompt the user for a string and whether to consider case
var inputStr = prompt("Enter a string to check if it is palindrome:");
var considerCase = confirm("Do you want to consider case when checking for palindromes?");

var result = isPalindrome(inputStr, considerCase);

if (result) {
  alert("(" + inputStr + ") is a palindrome.");
} else {
  alert("(" + inputStr + ") is not a palindrome.");
}
///////////////////////////////////////////////////////////////////////////////////

//Task3.2
// function to validate user input
function validateInput(input, regex) {
  return regex.test(input);
}

// function to prompt user for input until it is valid
function promptValidInput(promptMessage, regex) {
  let input = prompt(promptMessage);
  while (!validateInput(input, regex)) {
    input = prompt("Invalid input! Please enter a valid input. " + "\n" + promptMessage);
  }
  return input;
}

// prompt user for name
var nameRegex = /^[a-zA-Z ]+$/;
var guestName = promptValidInput('Please enter your name:', nameRegex);

// prompt user for phone number
var phoneRegex = /^[0-9]{8}$/;
var phone = promptValidInput('Please enter your phone number (8 digits):', phoneRegex);

// prompt user for mobile number
var mobileRegex = /^(010|011|012)[0-9]{8}$/;
var mobile = promptValidInput('Please enter your mobile number (11 digits starting with 010, 011, or 012):', mobileRegex);

// prompt user for email
var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var email = promptValidInput('Please enter your email address:', emailRegex);

// prompt user for color preference
let color = prompt('Please choose a color (red, green, or blue):');
while (color !== 'red' && color !== 'green' && color !== 'blue') {
  color = prompt('Invalid color! Please choose a valid color (red, green, or blue):');
}

// display user's information
switch (color) {
  case 'red':
    {
      document.write('<div style="color:red">Welcome dear guest <span style="color:black">' + guestName + '</span></div>');
      document.write('<div style="color:red">Your telephone number is <span style="color:black">' + phone + '</span></div>');
      document.write('<div style="color:red">Your mobile number is <span style="color:black">' + mobile + '</span></div>');
      document.write('<div style="color:red">Welcome dear guest, <span style="color:black">' + email + '</span></div>');
    }
    break;
  case 'green':
    document.write('<div style="color:green">Welcome dear guest <span style="color:black">' + guestName + '</span></div>');
    document.write('<div style="color:green">Your telephone number is <span style="color:black">' + phone + '</span></div>');
    document.write('<div style="color:green">Your mobile number is <span style="color:black">' + mobile + '</span></div>');
    document.write('<div style="color:green">Welcome dear guest, <span style="color:black">' + email + '</span></div>');    break;
  case 'blue':
    document.write('<div style="color:blue">Welcome dear guest <span style="color:black">' + guestName + '</span></div>');
    document.write('<div style="color:blue">Your telephone number is <span style="color:black">' + phone + '</span></div>');
    document.write('<div style="color:blue">Your mobile number is <span style="color:black">' + mobile + '</span></div>');
    document.write('<div style="color:blue">Welcome dear guest, <span style="color:black">' + email + '</span></div>');    break;
}
///////////////////////////////////////////////////////////////////////////////////

//Task3.3
var userString = prompt("Enter a string to count how many 'e' characters in it:"); // prompt the user to enter a string

var count = userString.match(/e/g); // count the number of 'e' characters using a regular expression

if (count === null) { // if no 'e' characters are found
  count = 0; // set the count to 0
} else { // otherwise
  count = count.length; // set the count to the number of 'e' characters found
}

document.write("The number of 'e' characters in the string is " + count + ".");
