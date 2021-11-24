// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array

// My Solution
function myFunction(set: Set<number | string>): (number | string)[] {
  return [...set];
}

myFunction(new Set([1, 2, 3]));
myFunction(new Set([123]));
myFunction(new Set(["1", "2", "3"]));
myFunction(new Set("123"));

// Alt Solution

function myFunction2(set) {
  return [...set];
}
