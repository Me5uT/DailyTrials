// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all

// My Solution
function myFunction(arr: number[], value: number): number[] {
  const length = arr.length;

  return arr.slice(length - value);
}

myFunction([1, 2, 3, 4, 5], 2);
myFunction([1, 2, 3], 6);
myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3);

// Alt Solution
function myFunction2(arr, n) {
  return arr.slice(-n);
}
