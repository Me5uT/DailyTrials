const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filled = nums.fill(5, 4);
// Changes all array elements from start to end index to a static value and returns the modified array

console.log(filled); // [ 1, 2, 3, 4, 5, 5, 5, 5, 5 ]
