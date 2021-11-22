let nestedArray = [1, [2, 3], [[]], [4, [5]], 6];

let zeroFlat = nestedArray.flat(0);

console.log(`Zero levels flattened array: ${zeroFlat}`);

// 1 is the default value even
// if no parameters are passed
let oneFlat = nestedArray.flat(1);

console.log(`One level flattened array: ${oneFlat}`);

let twoFlat = nestedArray.flat(2);

console.log(`One level flattened array: ${twoFlat}`);

// No effect when depth is 3 or
// more since array is already
// flattened completely.
let threeFlat = nestedArray.flat(3);
console.log(`Three levels flattened array: ${threeFlat}`);
