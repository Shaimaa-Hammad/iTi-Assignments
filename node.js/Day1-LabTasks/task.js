// const express = require('express');
// const app = express();

// app.get('/:operation/:numbers', (req, res) => {
//   const { operation, numbers } = req.params;
//   const nums = numbers.split('/').map(Number);
//   let result;

//   switch (operation) {
//     case 'add':
//       result = nums.reduce((acc, curr) => acc + curr, 0);
//       break;
//     case 'sub':
//       result = nums.reduce((acc, curr) => acc - curr);
//       break;
//     case 'mult':
//       result = nums.reduce((acc, curr) => acc * curr, 1);
//       break;
//     case 'div':
//       result = nums.reduce((acc, curr) => acc / curr);
//       break;
//     default:
//       res.send('Invalid operation');
//       break;
//   }

//   res.send(`The result of ${numbers} ${operation} is ${result}`);
// });


const express = require('express');
const app = express();

app.get('/:operation/*', (req, res) => {
  const { operation } = req.params;
  const nums = req.url.split('/').slice(2).map(Number);
  let result;

  switch (operation) {
    case 'add':
      result = nums.reduce((acc, curr) => acc + curr, 0);
      break;
    case 'sub':
      result = nums.reduce((acc, curr) => acc - curr);
      break;
    case 'mult':
      result = nums.reduce((acc, curr) => acc * curr, 1);
      break;
    case 'div':
      result = nums.reduce((acc, curr) => acc / curr);
      break;
    default:
      res.send('Invalid operation');
      break;
  }

  res.send(`Result is ${result}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
