function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    console.log(a);
  } else {
    console.log(b);
  }
}

const longerArray = longest([1, 2, 3], [1]);
const longerString = longest("Bob", "Alice");
const notOK = longest(1, 10); // Error, Numbers dont have "length" property
const itsOk = longest({ length: 1 }, { length: 2 });
