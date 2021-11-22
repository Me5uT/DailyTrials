// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

// My Solution
function myFunction(arr: number[]): number {
  return eval(arr.join("+")) / arr.length;
}

myFunction([10, 100, 40]);
myFunction([10, 100, 1000]);
myFunction([-50, 0, 50, 200]);

// Alt Solution
function myFunction(input) {
  return input.reduce((acc, cur) => acc + cur, 0) / input.length;
}
