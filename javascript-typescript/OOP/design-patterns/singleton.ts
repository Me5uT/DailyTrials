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
