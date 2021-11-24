// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

// My Solution
function myFunction(
  setOne: Set<number | string>,
  value: number | string
): Set<number | string> {
  return new Set([...setOne].filter((v) => v !== value));
}

myFunction(new Set([1, 2, 3]), 1);
myFunction(new Set("12345"), "3");
myFunction(new Set([1, 2, 3]), 4);

// Alt Solution
function myFunction2(set, val) {
  set.delete(val);
  return set;
}
