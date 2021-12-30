function printName(obj: { first: string; last?: string }) {
  console.log("obj", obj);
}

printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
