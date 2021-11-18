// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

// My Solution
function myFunction(num: number): boolean {
  return num % 2 === 0 ? true : false;
}

myFunction(10);
myFunction(-4);
myFunction(5);
myFunction(-111);

// Alt Solution
function myFunction2(input) {
  return input % 2 === 0;
}

myFunction2(10);
myFunction2(-4);
myFunction2(5);
myFunction2(-111);
