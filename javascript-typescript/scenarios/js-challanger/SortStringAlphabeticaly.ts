// Write a function that takes an array of strings as argument
// It should return the array with its values sorted alphabetically

// My Solution
function myFunction(arr: string[]): string[] {
  return arr.sort();
}

myFunction(["b", "c", "d", "a"]);
myFunction(["z", "c", "d", "a", "y", "a", "w"]);

// Alt Solution
function myFunction(input) {
  return input.sort();
}
