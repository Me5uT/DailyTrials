// Write a function that takes two numbers, say a and b, as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

// My Solution
function myFunction(a: number, b: number): number {
  return a < b ? a / b : a * b;
}

myFunction(10, 100);
myFunction(90, 45);
myFunction(8, 20);
myFunction(2, 0.5);

// Alt Solution
function myFunction2(a: number, b: number): number {
  return a < b ? a / b : a * b;
}

myFunction2(10, 100);
myFunction2(90, 45);
myFunction2(8, 20);
myFunction2(2, 0.5);
