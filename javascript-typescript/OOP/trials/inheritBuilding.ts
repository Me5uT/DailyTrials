class MsgError extends Error {
  constructor(m: string) {
    super(m);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, MsgError.prototype);
  }

  sayHello() {
    return `Hello ${this.message}`;
  }
}

const m = new MsgError("error");
console.log(m.sayHello());
