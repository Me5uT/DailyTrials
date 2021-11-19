// Write a function that takes a number as argument
// Round the number to the 2nd digit after the comma
// Return the rounded number

// My Solution
function myFunction(x: number): number {
  return Number(x.toFixed(2));
}

myFunction(2.12397);
myFunction(3.136);
myFunction(1.12397);
myFunction(26.1379);

// Alt SOlution
function myFunction(num) {
  return Number(num.toFixed(2));
}
