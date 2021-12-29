class Point1 {
  x: number = 0;
  y: number = 0;
}

class Point2 {
  x: number = 1;
  y: number = 1;
}

const p: Point1 = new Point2();

console.log("p.x", p.x);

//
class Person {
  name: string;
  age: number;
}

class Employee {
  name: string;
  age: number;
  salary: number;
}

const e: Person = new Employee();

//
class Empty {}

function fn(x: Empty) {
  // cant do anything with "x", so I wont
  console.log("x", x);
}

// All OK
fn(window);
fn({});
fn(fn);
fn("");
fn(null);
fn(undefined);
