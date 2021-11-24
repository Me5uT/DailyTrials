// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code

// My Solution
function myFunction(
  setOne: Set<number | string | boolean>,
  setTwo: Set<number | string | boolean>
): Set<number | string | boolean> {
  return new Set([...setOne, ...setTwo]);
}

myFunction(new Set("123"), new Set("234"));
myFunction(new Set([1, 2, 3]), new Set([3, 4, 5]));
myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]));

// Alt Solution
function myFunction2(a, b) {
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
}
