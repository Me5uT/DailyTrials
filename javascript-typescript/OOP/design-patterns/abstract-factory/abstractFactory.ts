interface IGoods {
  name: string;
}

class Product implements IGoods {
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

class Goods {
  static createObject = (product: string): IGoods => {
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
