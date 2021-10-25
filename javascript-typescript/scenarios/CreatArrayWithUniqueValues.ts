const nonUniqueNumbers: number[] = [1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9, 9];

const uniqueNumbers: number[] = [...new Set(nonUniqueNumbers)];

console.log("uniqueNumbers", uniqueNumbers); // output [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
