const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const splicedLastElem = numbers.splice(numbers.length - 1, 1); // splice(start,how many)
console.log("splicedLastElem", splicedLastElem); // output [ 10 ]

const splicedFirstELem = numbers.splice(0, 1);
console.log("splicedFirstELem", splicedFirstELem); // output [ 1 ]
