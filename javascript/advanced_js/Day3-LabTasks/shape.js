function Shape() {
    if (this.constructor === Shape) {
        throw new Error("Cannot create objects directly from Shape, use Rectangle or Square objects!");
      }
}

function Rectangle(width, height) {
  //Comment the following if statement to be able to create more than one rectangle and to use "valueOf" proberly
    if (Rectangle.count >= 1) {
      throw new Error("You cannot create more than one rectangle!");
    }

    Shape.call(this);
    if (this.constructor === Rectangle.prototype.constructor){
      Rectangle.count++;
    }
    var recWidth = width;
    var recHeight = height;

    Object.defineProperties(this, {
        "width": {
          get: function() { return recWidth; },
          enumerable: false,
          configurable: false
        },
        "height": {
          get: function() { return recHeight; },
          enumerable: false,
          configurable: false
        },
        "area": {
          get: function() { return recWidth * recHeight; },
          enumerable: false,
          configurable: false
        },
        "perimeter": {
          get: function() { return 2 * (recWidth + recHeight); },
          enumerable: false,
          configurable: false
        }
    });
}

Rectangle.prototype = Object.create(Shape.prototype);

Object.defineProperty(Rectangle.prototype, "toString", {
    enumerable: false,
    writable:true,
    value: function() {
      return "Rectangle(width=" + this.width + ", height=" + this.height + ", area=" + this.area + ", perimeter=" + this.perimeter + ")";
    }
});

// Rectangle.prototype.toString = function() {
//     return "Rectangle(width=" + this.width + ", height=" + this.height + ", area=" + this.area + ", perimeter=" + this.perimeter + ")";
// };

Object.defineProperty(Rectangle.prototype, "valueOf", {
    enumerable: false,
    value: function() {
        return this.area;
    }
});

Object.defineProperty(Rectangle.prototype, "constructor", {
    enumerable: false,
    value: function() {
        return Rectangle;
    }
});

Rectangle.prototype.constructor = Rectangle;

Rectangle.count = 0;


function Square(side) {
  //Comment the following if statement to be able to create more than one square and to use "valueOf" proberly
    if (Square.count >= 1) {
      throw new Error("You cannot create more than one square!");
    }
  
  Rectangle.call(this, side, side);
  if (this.constructor === Square.prototype.constructor){
    Square.count++;
  }
}
  
Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.toString = function() {
    return "Square(side=" + this.width + ", area=" + this.area + ", perimeter=" + this.perimeter + ")";
  };

Square.prototype.constructor = Square;

Square.count = 0;


//Test
// var shape = new Shape();

var rectangle1 = new Rectangle(5, 10);
console.log(rectangle1.toString());

var rectangle2 = new Rectangle(3, 12);
console.log(rectangle2.toString());

var square1 = new Square(6);
console.log(square1.toString());

var square2 = new Square(4);
console.log(square2.toString());

console.log(square1 + rectangle1);
console.log(square1 - rectangle1);

console.log("Number of created squares is " + Square.count);

for (var key in rectangle1){
    console.log(key);
}

// for (var k in square1){
//     console.log(k);
// }