//1. apply: It is used to intercept a function call and perform custom actions before and after
//invoking the function.

let myHandler1 = {
  apply: function (target, thisArg, argumentsList) {
    console.log(`Calling ${target.name} with arguments ${argumentsList}`);
    let result = target.apply(thisArg, argumentsList);
    console.log(`Result: ${result}`);
    return result;
  },
};

function add(x, y) {
  return x + y;
}

let addProxy = new Proxy(add, myHandler1);

console.log(addProxy(2, 3));


// 2. construct: It is used to intercept the creation of new objects using new operator and perform custom
// actions before and after creating the object.

let myHandler2 = {
    construct: function(target, args) {
      console.log(`Creating a new object with ${args}`);
      let newObj = new target(...args);
      console.log(`New object created!`);
      return newObj;
    }
  };
  
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  let PersonProxy = new Proxy(Person, myHandler2);
  
  let person = new PersonProxy("Raya", 25);
  

//   3. defineProperty: It is used to intercept the definition of a property on an object and perform
//   custom actions before and after defining the property.

let myHandler3 = {
    defineProperty: function(target, property, descriptor) {
      console.log(`Defining property ${property} with value ${descriptor.value}`);
      let result = Reflect.defineProperty(target, property, descriptor);
      console.log(`Property ${property} defined!`);
      return result;
    }
  };
  
  let obj1 = {};
  
  let objProxy1 = new Proxy(obj1, myHandler3);
  
  objProxy1.foo = "bar";
  

//   4. deleteProperty: It is used to intercept the deletion of a property from an object and perform
//   custom actions before and after deleting the property.

let myHandler4 = {
    deleteProperty: function(target, property) {
      console.log(`Deleting property ${property}`);
      const result = Reflect.deleteProperty(target, property);
      console.log(`Property ${property} deleted!`);
      return result;
    }
  };
  
  let obj2 = {foo: "bar"};
  
  let objProxy2 = new Proxy(obj2, myHandler4);
  
  delete objProxy2.foo;
  
// 5. getOwnPropertyDescriptor: It is used to intercept the retrieval of a property descriptor for
// a given property of an object.

let myHandler5 = {
    getOwnPropertyDescriptor: function(target, property) {
      console.log(`Retrieving property descriptor for property ${property}`);
      let descriptor = Reflect.getOwnPropertyDescriptor(target, property);
      console.log(`Descriptor for property ${property}:`, descriptor);
      return descriptor;
    }
  };
  
  let obj3 = {foo: "bar"};
  
  let objProxy3 = new Proxy(obj3, myHandler5);
  
  Object.getOwnPropertyDescriptor(objProxy3, "foo");
  