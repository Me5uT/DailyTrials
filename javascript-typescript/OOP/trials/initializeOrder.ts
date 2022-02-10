class Base {
  name = "base";
  // constructor() {
  //   console.log("My class is " + this.name);
  // }
}

class Derived extends Base {
  name = "derived";
  constructor() {
    super();
    console.log("My class is " + this.name);
  }
}

// Prints "base", not "derived"
const d = new Derived();

// The order of class initialization, as defined by JavaScript, is:

//     The base class fields are initialized
//     The base class constructor runs
//     The derived class fields are initialized
//     The derived class constructor runs

// This means that the base class constructor saw its own value for name during its own constructor,
// because the derived class field initializations hadn’t run yet.
