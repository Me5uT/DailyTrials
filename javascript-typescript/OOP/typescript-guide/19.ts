class Base {
  greet() {
    console.log("Hello, world");
  }
}

class Derived extends Base {
  greet(name?: string) {
    // Overload ederken super. diyerek base class daki methoda ulaşabiliriz
    if (!name) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toLocaleUpperCase()}`);
    }
  }
}

const d = new Derived();
d.greet();
d.greet("alice");
