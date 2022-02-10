class Foo {
  private count = 0;
  #count1 = 1;
}

const f = new Foo();

console.log(f["count"]);
console.log(f["#count1"]); // error
