class Polygon {
  constructor() {
    if (new.target === Polygon) {
      throw new TypeError("Cannot construct Polygon instances directly");
    }
  }

  getArea() {
    throw new Error("Method 'getArea' must be implemented.");
  }
}

export class Rectangle extends Polygon {
  constructor(width, height) {
    super();
    this.recWidth = width;
    this.recHeight = height;
  }

  getArea() {
    return this.recWidth * this.recHeight;
  }

  toString() {
    return `Rectangle(width=${this.recWidth}, height=${
      this.recHeight
    }, area=${this.getArea()})`;
  }

  draw(recCtx, x, y, fillColor) {
    recCtx.fillStyle = fillColor;
    recCtx.fillRect(x, y, this.recWidth, this.recHeight);
  }
}

export class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.sqSide = side;
  }

  toString() {
    return `Square(side=${this.sqSide}, area=${this.getArea()})`;
  }

  draw(sqStx, x, y, fillColor) {
    super.draw(sqStx, x, y, fillColor);
  }
}

export class Circle extends Polygon {
  constructor(radius) {
    super();
    this.cRadius = radius;
  }

  getArea() {
    return Math.PI * this.cRadius ** 2;
  }

  toString() {
    return `Circle(radius=${this.cRadius}, area=${this.getArea()})`;
  }

  draw(cirCtx, x, y, fillColor) {
    cirCtx.beginPath();
    cirCtx.fillStyle = fillColor;
    cirCtx.arc(
      x + this.cRadius,
      y + this.cRadius,
      this.cRadius,
      0,
      2 * Math.PI
    );
    cirCtx.stroke();
    cirCtx.fill();
  }
}

export class Triangle extends Polygon {
  constructor(base, height) {
    super();
    this.triBase = base;
    this.triHeight = height;
  }

  getArea() {
    return 0.5 * this.triBase * this.triHeight;
  }

  toString() {
    return `Triangle(base=${this.triBase}, height=${
      this.triHeight
    }, area=${this.getArea()})`;
  }

  draw(triCtx, x, y, fillColor) {
    triCtx.beginPath();
    triCtx.moveTo(x, y);
    triCtx.lineTo(x + this.triBase, y);
    triCtx.lineTo(x + this.triBase / 2, y + this.triHeight);
    triCtx.closePath();
    triCtx.fillStyle = fillColor;
    triCtx.stroke();
    triCtx.fill();
  }
}
