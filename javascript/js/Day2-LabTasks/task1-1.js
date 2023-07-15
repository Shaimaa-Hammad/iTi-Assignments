// Initialize an empty array to store the user inputs
var numbers = [];

// Prompt the user to enter numbers until they choose to stop
while (true) {
  var input = prompt("Enter a number (or type 'stop' to finish):");
  
  // If the user inputs "stop", break out of the loop
  if (input === "stop") {
    break;
  }
  
  // Convert the user input to a number and add it to the array
  var number = Number(input);
  if (!isNaN(number)) {
    numbers.push(number);
  }
}

// Perform mathematical operations on the array elements
if (numbers.length === 0) {
  alert("No numbers entered!");
} else {
  var sum = 0;
  var difference = numbers[0];
  var product = 1;
  var quotient = numbers[0];
  
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    product *= numbers[i];
    
    if (i > 0) {
      difference -= numbers[i];
      quotient /= numbers[i];
    }
  }
  document.write('<div style="font-size:40px; text-align: center">Adding--Subtracting--Multiplying--and Dividing ' + numbers.length+ ' values</div><hr/>');
  document.write('<div style="color:red; font-size:20px">Sum of the ' + numbers.length + ' values: <span style="color:black">' + numbers.join(" + ") + " = " + sum + '</span></div>');
  document.write('<div style="color:red; font-size:20px">difference of the ' + numbers.length + ' values: <span style="color:black">' + numbers.join(" - ") + " = " + difference + '</span></div>');
  document.write('<div style="color:red; font-size:20px">product of the ' + numbers.length + ' values: <span style="color:black">' + numbers.join(" * ") + " = " + product + '</span></div>');
  document.write('<div style="color:red; font-size:20px">division of the ' + numbers.length + ' values: <span style="color:black">' + numbers.join(" / ") + " = " + quotient + '</span></div>');
}
