// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

// My Solution
function myFunction(x: number, y: number): number {
  return x % y === 0 ? x : myFunction(x + 1, y);
}

myFunction(1, 23);
myFunction(23, 23);
myFunction(7, 3);
myFunction(-5, 7);

// Alt Solution
function myFunction(x, y) {
  while (x % y !== 0) x++;
  return x;
}
