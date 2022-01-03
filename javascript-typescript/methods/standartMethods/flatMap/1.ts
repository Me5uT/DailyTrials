const flatMaped = [10, 2].flatMap((n: number) => [n, n * 3]);
// Calls a defined callback function on each element of an array.
// Then, flattens the result into a new array. This is identical to a map followed by flat with depth 1.

console.log(flatMaped); // [ 10, 30, 2, 6 ]
