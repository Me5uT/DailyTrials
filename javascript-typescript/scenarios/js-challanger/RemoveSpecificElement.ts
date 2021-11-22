// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

// My Solution
function myFunction(arr: any[], e: any): any[] {
  return arr.filter((value: any) => value !== e);
}

myFunction([1, 2, "2", 1], 1);
myFunction([1, 2, 3], 2);
myFunction([1, 2, "2"], "2");
myFunction([false, "2", 1], false);
myFunction([1, 2, "2", 1], 1);

// ALt Solution
function myFunction(arr, value) {
  return arr.filter((cur) => cur !== value);
}
