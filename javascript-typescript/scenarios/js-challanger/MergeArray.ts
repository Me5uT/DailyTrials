// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

// My Solution
function myFunction(...args: any[]): any[] {
  return [].concat(...args);
}

myFunction([1, 2, 3], [4, 5, 6]);
myFunction(["a", "b", "c"], [4, 5, 6]);
myFunction([true, true], [1, 2], ["a", "b"]);

// Alt Solution
function myFunction2(...arrays) {
  return arrays.flat();
}
