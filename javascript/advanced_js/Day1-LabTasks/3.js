function addNumbers() {
  // Check if any arguments were passed
  if (arguments.length === 0) {
    throw new Error('No arguments passed!');
  }
  
  let sum = 0;
  
  // Loop over each argument and add it to the sum
  for (let i = 0; i < arguments.length; i++) {  
    // Check if the argument is a number
    if (typeof(arguments[i]) !== 'number') {
      throw new Error('Invalid argument type at index ' + i + ': ' + typeof(arguments[i]));
    }
    
    sum += arguments[i];
  }
  
  return sum;
}

console.log(addNumbers(1, 'b'));
