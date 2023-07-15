function onlyTwoParams(x, y) {
    if (arguments.length !== 2) {
      throw new Error('Invalid number of arguments. Function only accepts 2 parameters.');
    }
    return x + y;
  }
  
  console.log(onlyTwoParams(1, 2));
  