const numbers: number[] = [2, 8, 9, 4, 1, 13, 0];

const evenNumbers: number[] = numbers.filter((num: number) => num % 2 == 0);

console.log("evenNumbers", evenNumbers); // output [ 2, 8, 4, 0 ]

const oddNumbers: number[] = numbers.filter((num: number) => num % 2 == 1);

console.log("oddNumbers", oddNumbers); // output [ 9, 1, 13 ]
