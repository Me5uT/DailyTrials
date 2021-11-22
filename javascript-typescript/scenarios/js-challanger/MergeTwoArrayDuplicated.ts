// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

// My Solution
function myFunction(arr1: number[], arr2: number[]): number[] {
  return [...new Set([arr1, arr2].flat())].sort((a, b) =>
    a > b ? 1 : a < b ? -1 : 0
  );
}

myFunction([1, 2, 3], [3, 4, 5]);
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]);

// Alt Solution
function myFunction2(first, second) {
  return [...new Set([...first, ...second])].sort((a, b) => a - b);
}
