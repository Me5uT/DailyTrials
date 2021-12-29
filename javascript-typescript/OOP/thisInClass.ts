class MyClass {
  name = "MyClass";
  getName() {
    return this.name;
  }
}

const c = new MyClass();
const obj = {
  name: "obj",
  getName: c.getName,
};

// Prints "obj", not "MyClass"
console.log("obj.getName()", obj.getName());

const d = new MyClass();
const obj2 = {
  name: "obj",
  getName: d.getName(),
};

// Prints "MyClass", not "obj"
console.log("obj2.getName", obj2.getName);

//

class MyClass2 {
  name = "MyClass";
  getName = () => {
    return this.name;
  };
}

const e = new MyClass2();
const g = e.getName;
// Prints "MyClass" instead of crashing
console.log("g()", g());

//

class MyClass3 {
  name = "MyClass";
  getName(this: MyClass) {
    return this.name;
  }
}
const r = new MyClass3();
// OK
r.getName();

// Error, would crash
// const v = r.getName;
// console.log(v());
