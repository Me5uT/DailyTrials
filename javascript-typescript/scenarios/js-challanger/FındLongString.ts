// Write a function that takes an array of strings as argument
// It should return the longest string

// My Solution
function myFunction2(arr: string[]): string {
  let result: string = "";
  arr.forEach((word) => (word.length > result.length ? (result = word) : null));
  return result;
}

myFunction(["help", "me"]);
myFunction(["I", "need", "candy"]);

// ALt Solution
function myFunction(input) {
  return input.reduce((a, b) => (a.length <= b.length ? b : a));
}
