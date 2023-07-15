//Task1
let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(`x is ${x}`);
console.log(`y is ${y}`);
////////////////////////////////////////

//Task2
function getMinMax(...numbers) {
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  return [min, max];
}

let arr1 = [4, 2, 7, 1, 9];
let arr2 = [5, 0, 3, 8];

let [min1, max1] = getMinMax(...arr1);
let [min2, max2] = getMinMax(...arr2);

console.log(`Minimum value of arr1 is ${min1}`);
console.log(`Maximum value of arr1 is ${max1}`);

console.log(`Minimum value of arr2 is ${min2}`);
console.log(`Maximum value of arr2 is ${max2}`);
////////////////////////////////////////

//Task3
let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let allAreStrings = fruits.every((fruit) => typeof fruit === "string");
console.log(`Are all fruits elements strings? -->${allAreStrings}`);

let startsWithA = fruits.some((fruit) => fruit.startsWith("a"));
console.log(`Do some fruits elements'names start with letter "a"? -->${startsWithA}`);

let filteredFruits = fruits.filter((fruit) => fruit.startsWith("b") || fruit.startsWith("s"));
console.log(`fruits elements'names start with letters "b" or "s" are: ${filteredFruits}`);

let likeFruits = fruits.map((fruit) => `I like ${fruit}`);
console.log(likeFruits);

likeFruits.forEach((fruit) => console.log(fruit));
