// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

// My Solution
function myFunction(num: number): number[] {
  return num
    .toString()
    .split("")
    .map((e) => Number(e));
}

myFunction(10);
myFunction(931);
myFunction(193278);

// ALt Solution
function myFunction2(num) {
  const string = num + "";
  const strings = string.split("");
  return strings.map((digit) => Number(digit));
}

myFunction2(10);
myFunction2(931);
myFunction2(193278);
