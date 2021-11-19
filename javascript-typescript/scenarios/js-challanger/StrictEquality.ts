// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

// My Solution
function myFunction(x: number, y: number): boolean {
  return x === y;
}

myFunction(2, 3);
myFunction(3, 3);
myFunction(1, "1");
myFunction("10", "10");

// Alt Solution
function myFunction(a, b) {
  return a === b;
}
