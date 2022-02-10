abstract class Base {
  abstract getName(): string;

  printName() {
    console.log(`Hello ${this.getName()}`);
  }
}

//const b = new Base();
// Cannot create an instance of an abstract class.

class Drived extends Base {
  // Non-abstract class 'Drived' does not implement
  // inherited abstract member 'getName' from class 'Base'.
}

const d = new Drived();
d.printName();
