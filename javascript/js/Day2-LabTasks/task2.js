// Ask the user to enter the radius of a circle
var radius = prompt("What is the value of your circle's radius");

// Convert the radius to a number
radius = Number(radius);

// Calculate the area of the circle
var area = Math.PI * Math.pow(radius, 2);

// Display the area of the circle
alert("Total area of the circle is " + area);

// Ask the user to enter a value to calculate its square root
var value = prompt("What is the value you want to calculate its square root");

// Convert the value to a number
value = Number(value);

// Calculate the square root of the value
var squareRoot = Math.sqrt(value);

// Alert the result of the square root calculation
alert("Square root of " + value + " is " + squareRoot);

// Ask the user to enter an angle to calculate its cos value
var angle = prompt("What is the angle you want to calculate its cos value");

// Convert the angle to a number
angle = Number(angle);

// Calculate the cosine of the angle
var radians = angle * (Math.PI / 180);
var cosValue = Math.cos(radians).toFixed(6);;

// Display the cosine of the angle
document.write("cos " + angle + " is " + cosValue);