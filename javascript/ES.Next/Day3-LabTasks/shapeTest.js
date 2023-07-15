import { Rectangle as R,  Square as S, Circle as C, Triangle as T } from "./shapeLib.js";

// create instances of the shapes
let r1 = new R(150, 50);
let s1 = new S(100);
let c1 = new C(50);
let t1 = new T(100, 50);

// display their properties and area using toString() method
console.log(r1.toString());
console.log(s1.toString());
console.log(c1.toString());
console.log(t1.toString());

// draw the shapes on a canvas element
let canvas = document.createElement("canvas");
canvas.setAttribute('width', '1000');
canvas.setAttribute('height', '500');
document.body.appendChild(canvas);
let ctx = canvas.getContext("2d");

r1.draw(ctx, 0, 0, "red");
s1.draw(ctx, 100, 100, "blue");
c1.draw(ctx, 200, 200, "green");
t1.draw(ctx, 300, 300, "yellow");