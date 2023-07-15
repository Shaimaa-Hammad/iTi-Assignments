// let myObj = {
//   [Symbol.match]: function (str) {
//     let matches = [];
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === "a") {
//         matches.push(i);
//       }
//     }
//     return matches;
//   },
// };

// let myStr = "I'm Shaimaa";
// console.log(myStr.match(myObj));


let myObj = {
  // char: '',
  // setChar: function(char) {
  //   this.char = char;
  // },
  [Symbol.match]: function(str) {
    return function(char) {
        let matches = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        matches.push(i);
      }
    }
    return matches;
      }
  }
};

let myStr = "I'm Shaimaa";
// myObj.setChar('a');
console.log(myStr.match(myObj)('a'));

