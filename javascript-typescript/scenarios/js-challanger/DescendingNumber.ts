// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

// My Solution
function myFunction(arr: number[]): number[] {
  return arr.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
}

myFunction([1, 3, 2]);
myFunction([4, 2, 3, 1]);

// Alt Solution
function myFunction(input) {
  return input.sort((a, b) => b - a);
}
