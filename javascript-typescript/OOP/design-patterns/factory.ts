interface IProduct {
  name: string;
}

class Product implements IProduct {
  name = "";
}

class Phone extends Product {
  constructor() {
    super();
    this.name = "Phone";
  }
}
class Car extends Product {
  constructor() {
    super();
    this.name = "Car";
  }
}

class Computer extends Product {
  constructor() {
    super();
    this.name = "Computer";
  }
}

class Creator {
  static createObject = (product: string): IProduct => {
    switch (product) {
      case "Phone":
        return new Phone();
      case "Car":
        return new Car();
      default:
        return new Computer();
    }
  };
}

const obj = Creator.createObject("Car");
console.log("obj.name", obj.name);
