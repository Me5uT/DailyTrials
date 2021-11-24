// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result

// My Solution
function myFunction(...args): Set<number | string | boolean | {}> {
  return new Set([...args]);
}

myFunction(1, "b", 3);
myFunction(NaN, null, false);
myFunction("a", ["b"], { c: 3 });

// Alt Solution
function myFunction2(a, b, c) {
  const set = new Set();
  set.add(a);
  set.add(b);
  set.add(c);
  return set;
}
