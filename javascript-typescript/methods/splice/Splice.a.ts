const fruits = ["Banana", "Orange", "Apple", "Mango"];

const spliced = fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(spliced); // output -> []
console.log(fruits); // output -> [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
