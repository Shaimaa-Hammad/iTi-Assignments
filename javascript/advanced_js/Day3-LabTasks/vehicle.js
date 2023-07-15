function Vehicle(speed, color) {
  if (typeof speed !== "number" || typeof color !== "number") {
    throw new Error("Invalid data type. Speed and color must be numbers.");
  }

  Object.defineProperty(this, "vSpeed", {
    value: speed,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "vColor", {
    value: color,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "speed", {
    get: function () {
      return this.vSpeed;
    },
  });

  Object.defineProperty(this, "color", {
    get: function () {
      return this.vColor;
    },
  });
}
Vehicle.prototype.start = function () {
  console.log("Starting vehicle...");
  return true;
};

Vehicle.prototype.stop = function () {
  console.log("Stopping vehicle...");
  return true;
};

Vehicle.prototype.goForward = function (speed, accel) {
  console.log(`Going forward at speed ${speed} with acceleration ${accel}...`);
};

Vehicle.prototype.goBackward = function (speed, accel) {
  console.log(`Going backward at speed ${speed} with acceleration ${accel}...`);
};

Vehicle.prototype.toString = function () {
  return "Vehicle";
};

Vehicle.prototype.valueOf = function () {
  return "Vehicle";
};


function MotorVehicle(speed, color, sizeOfEngine, licensePlate) {
  Vehicle.call(this, speed, color);

  if (typeof sizeOfEngine !== "number") {
    throw new Error("Invalid data type. Size of engine must be a number.");
  }

  if (typeof licensePlate !== "string") {
    throw new Error("Invalid data type. License plate must be a string.");
  }

  Object.defineProperty(this, "mvSizeOfEngine", {
    value: sizeOfEngine,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "mvLicensePlate", {
    value: licensePlate,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "sizeOfEngine", {
    get: function () {
      return this.mvSizeOfEngine;
    },
  });

  Object.defineProperty(this, "licensePlate", {
    get: function () {
      return this.mvLicensePlate;
    },
  });
}
MotorVehicle.prototype = Object.create(Vehicle.prototype);

MotorVehicle.prototype.getSizeOfEngine = function () {
  console.log(`Size of engine: ${this.sizeOfEngine}`);
};

MotorVehicle.prototype.getLicensePlate = function () {
  console.log(`License plate: ${this.licensePlate}`);
};

MotorVehicle.prototype.toString = function () {
  return "MotorVehicle";
};

MotorVehicle.prototype.valueOf = function () {
  return "MotorVehicle";
};

MotorVehicle.prototype.constructor = MotorVehicle;


function Bicycle(speed, color) {
  Vehicle.call(this, speed, color);
}

Bicycle.prototype = Object.create(Vehicle.prototype);

Bicycle.prototype.ringBell = function () {
  console.log("Ring ring!");
};

Bicycle.prototype.toString = function () {
  return "Bicycle";
};

Bicycle.prototype.valueOf = function () {
  return "Bicycle";
};

Bicycle.prototype.constructor = Bicycle;

function DumpTruck(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  loadCapacity,
  numWheels,
  weight
) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);

  if (typeof loadCapacity !== "number") {
    throw new Error("Invalid data type. Load capacity must be a number.");
  }

  if (typeof numWheels !== "number") {
    throw new Error("Invalid data type. Number of wheels must be a number.");
  }

  if (typeof weight !== "number") {
    throw new Error("Invalid data type. Weight must be a number.");
  }

  Object.defineProperty(this, "dtLoadCapacity", {
    value: loadCapacity,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "dtNumWheels", {
    value: numWheels,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "dtWeight", {
    value: weight,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "loadCapacity", {
    get: function () {
      return this.dtLoadCapacity;
    },
  });

  Object.defineProperty(this, "numWheels", {
    get: function () {
      return this.dtNumWheels;
    },
  });

  Object.defineProperty(this, "weight", {
    get: function () {
      return this.dtWeight;
    },
  });
}


DumpTruck.prototype = Object.create(MotorVehicle.prototype);

DumpTruck.prototype.lowerLoad = function () {
  console.log("Lowering load...");
};

DumpTruck.prototype.raiseLoad = function () {
  console.log("Raising load...");
};

DumpTruck.prototype.toString = function () {
  return "DumpTruck";
};

DumpTruck.prototype.valueOf = function () {
  return "DumpTruck";
};

DumpTruck.prototype.constructor = DumpTruck;


function Car(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  numOfDoors,
  numWheels,
  weight
) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);

  if (typeof numOfDoors !== "number") {
    throw new Error("Invalid data type. Number of doors must be a number.");
  }

  if (typeof numWheels !== "number") {
    throw new Error(
      "Invalid data type. Number of wheels must be a number."
    );
  }

  if (typeof weight !== "number") {
    throw new Error("Invalid data type. Weight must be a number.");
  }

  Object.defineProperty(this, "cNumOfDoors", {
    value: numOfDoors,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "cNumWheels", {
    value: numWheels,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "cWeight", {
    value: weight,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "numOfDoors", {
    get: function () {
      return this.cNumOfDoors;
    },
  });

  Object.defineProperty(this, "numWheels", {
    get: function () {
      return this.cNumWheels;
    },
  });

  Object.defineProperty(this, "weight", {
    get: function () {
      return this.cWeight;
    },
  });
}

Car.prototype = Object.create(MotorVehicle.prototype);

Car.prototype.switchOnAirCon = function () {
  console.log("Switching on air conditioning...");
};

Car.prototype.getNumOfDoors = function () {
  console.log(`Number of doors: ${this.numOfDoors}`);
};

Car.prototype.toString = function () {
  return "Car";
};

Car.prototype.valueOf = function () {
  return "Car";
};

Car.prototype.constructor = Car;

//Test
var vehicle = new Vehicle(60, 2);
console.log("Vehicle's speed is: " + vehicle.speed);
console.log("Vehicle's color code/number is: " + vehicle.color);
console.log(vehicle.start());

// Testing Bicycle class
var bicycle = new Bicycle(10, 3);
console.log(bicycle.speed);
console.log(bicycle.color);
console.log(bicycle.ringBell());
console.log(bicycle.start());
console.log(bicycle.stop());
console.log(bicycle.goForward(20, 5));
console.log(bicycle.goBackward(10, 2));

// Testing MotorVehicle class
var motorVehicle = new MotorVehicle(80, 1, 3000, 'AB1234');
console.log(motorVehicle.speed);
console.log(motorVehicle.color);
console.log(motorVehicle.sizeOfEngine);
console.log(motorVehicle.licensePlate);
console.log(motorVehicle.start());
console.log(motorVehicle.stop());
console.log(motorVehicle.goForward(50, 10));
console.log(motorVehicle.goBackward(20, 5));
console.log(motorVehicle.getSizeOfEngine());
console.log(motorVehicle.getLicensePlate());

// Testing DumpTruck class
var dumpTruck = new DumpTruck(40, 2, 5000, 'CD5678', 5000, 6, 10000);
console.log(dumpTruck.speed);
console.log(dumpTruck.color);
console.log(dumpTruck.sizeOfEngine);
console.log(dumpTruck.licensePlate);
console.log(dumpTruck.loadCapacity);
console.log(dumpTruck.numWheels);
console.log(dumpTruck.weight);
console.log(dumpTruck.start());
console.log(dumpTruck.stop());
console.log(dumpTruck.goForward(30, 8));
console.log(dumpTruck.goBackward(10, 4));
console.log(dumpTruck.getSizeOfEngine());
console.log(dumpTruck.getLicensePlate());
console.log(dumpTruck.lowerLoad());
console.log(dumpTruck.raiseLoad());

// Testing Car class
var car = new Car(100, 4, 2000, 'EF9012', 4, 4, 1500);
console.log(car.speed);
console.log(car.color);
console.log(car.sizeOfEngine);
console.log(car.licensePlate);
console.log(car.numOfDoors);
console.log(car.numWheels);
console.log(car.weight);
console.log(car.start());
console.log(car.stop());
console.log(car.goForward(70, 12));
console.log(car.goBackward(30, 6));
console.log(car.getSizeOfEngine());
