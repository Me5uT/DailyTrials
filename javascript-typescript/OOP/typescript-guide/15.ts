class Greeter {
  readonly name: string = "world";

  constructor(otherName?: string) {
    if (otherName) {
      this.name = otherName;
    }
  }

  err() {
    // this.name = "not ok"; // Cannot assign
  }
}

const g = new Greeter("hello");

console.log(g.name);
