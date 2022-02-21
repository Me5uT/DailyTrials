abstract class Car {
  description: string = "";

  getDescription = () => {
    return this.description;
  };

  abstract cost(): number;
}

class ModelS extends Car {
  description = "Model S";

  cost = (): number => {
    return 73000;
  };
}

class ModelX extends Car {
  description: string = "Model X";

  cost = (): number => {
    return 77000;
  };
}

abstract class CarOptions extends Car {
  // @ts-ignore
  decoratedCar: Car;

  abstract getDescription: () => string;
  abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  getDescription = (): string => {
    return `${this.decoratedCar.getDescription()} Enhanced Auto Pilot`;
  };

  cost = (): number => {
    return this.decoratedCar.cost() + 5000;
  };
}

class RearFacingSeats extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  getDescription = (): string => {
    return `${this.decoratedCar.getDescription()} Rear facing seats`;
  };

  cost = (): number => {
    return this.decoratedCar.cost() + 2000;
  };
}

let myTesla = new ModelS();
myTesla = new RearFacingSeats(myTesla);
myTesla = new EnhancedAutoPilot(myTesla);

console.log(myTesla.getDescription());
console.log(myTesla.cost());
