class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

const b = new Box("hello!"); // b: Box<string>
const n = new Box(1); // n: Box<number>

class Box2<Type> {
  static defaultValue: Type;
  // Static members cannot reference class type parameters.
}
