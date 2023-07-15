var rectangle ={
    width: this.width,
    height: this.height,
    calArea: function(){
        return this.width * this.height;
    },
    calPerimeter: function(){
        return 2 * (this.width + this.height);
    },
    displayInfo: function(){
        console.log("Rectangle Info: ");
        console.log("Width: " + this.width);
        console.log("Height: " + this.height);
        console.log("Area: " + this.calArea());
        console.log("Perimeter: " + this.calPerimeter());
    }
};

var r = Object.create(rectangle);
r.width = 5;
r.height = 7;
r.displayInfo();