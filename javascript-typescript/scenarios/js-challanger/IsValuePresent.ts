// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set

// My Solution
function myFunction2(obj: Set<number | string>, v: number | string): boolean {
  return [...obj].map((num) => num === v).some((b) => b === true);
}

myFunction(new Set([1, 2, 3]), 2);
myFunction(new Set([123]), 2);
myFunction(new Set(["1", "2", "3"]), "2");
myFunction(new Set("123"), "2");

// Alt Solution
function myFunction(set, val) {
  return set.has(val);
}
