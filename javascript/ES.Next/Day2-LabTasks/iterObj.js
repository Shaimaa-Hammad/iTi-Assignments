var obj1 = {
  name: "ali",
  age: 10,

  //To retrieve values
  [Symbol.iterator]: function* () {
    for (let i in obj1) {
      yield obj1[i];
    }
  },
};

for (let val of obj1) {
  console.log(val);
}

var iterator = obj1[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
///////////////////////////////////////////////////////////////////
var obj2 = {
  name: "ali",
  age: 10,

  //To retrieve keys
  [Symbol.iterator]: function* () {
    var ourKeys = Object.keys(obj2);
    for (let i in obj2) {
      yield i;
    }
  },
};

for (let key of obj2) {
  console.log(key);
}

var iterator = obj2[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());