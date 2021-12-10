const fruits = ["Banana", "Orange", "Apple", "Mango"];
const spliced = fruits.splice(0, 1); // Removes the first element of fruits

console.log(spliced); // output -> [ 'Banana' ]
console.log(fruits); // output -> [ 'Orange', 'Apple', 'Mango' ]
