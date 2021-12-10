const fruits = ["Banana", "Orange", "Apple", "Mango", "Pear", "Watermelon"];

const sortedFruits = fruits.sort(); // sorted strings first character
console.log("sortedFruits", sortedFruits); // output [ 'Apple', 'Banana', 'Mango', 'Orange', 'Pear', 'Watermelon' ]

const someNumbers = [21, 65, 423, 41, 80, 32, 2, 12, 81, 67];

const sortedNumbersLowToHigh = someNumbers.sort((a, b) => {
  return a - b;
});
console.log("sortedNumbersLowtoHigh", sortedNumbersLowToHigh); // output [ 2, 12, 21, 32,  41, 65, 67, 80, 81, 423 ]

const sortedNumbersHighToLow = someNumbers.sort((a, b) => {
  return b - a;
});
console.log("sortedNumbersHighToLow", sortedNumbersHighToLow); // output [ 423, 81, 80, 67, 65, 41, 32, 21, 12, 2 ]
