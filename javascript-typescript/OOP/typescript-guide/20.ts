class Base {
  greet() {
    console.log("Hello, world");
  }
}

declare const d: Base;

const b: Base = d;
b.greet();
