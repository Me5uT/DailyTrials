// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

// My Solution
function myFunction(arr: any[], num: number): any[] {
  num < 6 ? arr.unshift(0) : arr.unshift(num);
  return arr;
}

myFunction([1, 2, 3], 6);

myFunction(["a", "b"], 2);

myFunction([null, false], 11);

function myFunction2(arr: any[], num: number): any[] {
  arr.unshift(num < 6 ? 0 : num);
  return arr;
}

myFunction2([1, 2, 3], 6);

myFunction2(["a", "b"], 2);

myFunction2([null, false], 11);

// ALt Solution
function myFunction3(array, num) {
  return [...(num > 5 ? [num] : [0]), ...array];
}
