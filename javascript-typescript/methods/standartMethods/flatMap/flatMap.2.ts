const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Calls a defined callback function on each element of an array. Then, flattens the result into a new array. This is identical to a map followed by flat with depth 1.
const flatMaped = nums.flatMap((n) => n * 100);

console.log("flatMaped", flatMaped);
