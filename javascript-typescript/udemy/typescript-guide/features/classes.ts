class Vehicle {
  constructor(public color: string) {
    // this.color = color;
  }

  //   color: string = "red";

  public drive(): void {
    console.log("chugga chugga");
  }
  private honk(): void {
    console.log("beeep");
  }

  protected stop(): void {
    console.log("stopped");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive2(): void {
    console.log("whoommm");
  }

  public startDriving(): void {
    this.drive2();
    // this.honk();
    this.stop();
  }
}

const vehicle = new Vehicle("orange");
// vehicle.drive();
// vehicle.honk();
console.log("vehicle.color", vehicle.color);

const car = new Car(4, "blue");
car.startDriving(); // "whoommm"
// car.honk();
