class Singleton {
  public static instance: Singleton = new Singleton();
  private id: number = 0;

  private constructor() {}

  static createInstance = (): Singleton => {
    return Singleton.instance;
  };

  incrementId = (): void => {
    this.id += 1;
    console.log("this.id", this.id);
  };
}

// const obj1 = new Singleton(); //error
const obj2 = Singleton.createInstance();
obj2.incrementId();

const obj3 = Singleton.createInstance();
obj3.incrementId();

const obj4 = Singleton.createInstance();
obj4.incrementId();

console.log(obj2 === obj3); // true

//

class Singleton2 {
  static instance: Singleton2;
  id: number = 0;

  constructor(id: number) {
    if (Singleton2.instance) {
      return Singleton2.instance;
    }
    this.id = id;
    Singleton2.instance = this;
  }
}

const object2 = new Singleton2(2);
const object3 = new Singleton2(3);

console.log("object2.id", object2.id);
console.log("object3.id", object3.id);
console.log(object3 === object2);
