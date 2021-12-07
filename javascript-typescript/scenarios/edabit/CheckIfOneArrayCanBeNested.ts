// Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1: number[], arr2: number[]): boolean {
  const sortedArr1 = arr1.sort();
  const sortedArr2 = arr2.sort();
  return (
    sortedArr1[0] > sortedArr2[0] &&
    sortedArr1[arr1.length - 1] < sortedArr2[arr2.length - 1]
  );
}

canNest([1, 2, 3, 4], [0, 6]); // true

canNest([3, 1], [4, 0]); // true

canNest([9, 9, 8], [8, 9]); // false

canNest([1, 2, 3, 4], [2, 3]); // false
