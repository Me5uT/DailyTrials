const cars = ["Honda", "Hundai", "Opel", "Ford", "Mercedes"];

const slicedFirstCar = cars.slice(0, 1); // slice( start, end )
console.log("slicedFirstCar", slicedFirstCar); // output [ "Honda" ]

const slicedLastCar = cars.slice(cars.length - 1, cars.length);
console.log("slicedLastCar", slicedLastCar); // output [ "Mercedes" ]

const slicedLastCarr = cars.slice(cars.length - 1); // slice( start ) - end optional
console.log("slicedLastCarr", slicedLastCarr); // output [ "Mercedes" ]
