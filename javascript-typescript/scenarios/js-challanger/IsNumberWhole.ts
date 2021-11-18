// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

function myFunction(num: number): boolean {
  return num.toString().split(".").length < 2;
}

myFunction(4);

myFunction(1.123);

myFunction(1048);

myFunction(10.48);

// Alt Solution
function myFunction2(input) {
  return input - Math.floor(input) === 0;
}
