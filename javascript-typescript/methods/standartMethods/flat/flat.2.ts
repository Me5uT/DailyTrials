const nesteddArr = [[1], 2, [3, [4], [5, [6, 7]]]];
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const flatted = nesteddArr.flat();

console.log("flatted", flatted); // flatted [ 1, 2, 3, [ 4 ], [ 5, [ 6, 7 ] ] ]

const doubleFlatted = nesteddArr.flat(2);

console.log("doubleFlatted", doubleFlatted); // doubleFlatted [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
