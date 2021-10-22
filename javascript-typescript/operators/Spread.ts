const firstArr: number[] = [1, 2, 3, 4, 5];
const secondArr: number[] = [6, 7, 8, 9, 10];

const mergedArr: number[] = [...firstArr, ...secondArr];

console.log("mergedArr", mergedArr); // output [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
