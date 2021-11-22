// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max

// My Solution
function myFunction(first: number, second: number): number[] {
  let result: number[] = [];

  while (first <= second) {
    result.push(first);
    first++;
  }

  return result;
}

myFunction(2, 10);
myFunction(1, 3);
myFunction(-5, 5);
myFunction(2, 7);

// Alt Solution
function myFunction2(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}
