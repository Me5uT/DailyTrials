// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

// My Solution
function myFunction({ continent, country }) {
  return country;
}

myFunction({ continent: "Asia", country: "Japan" });

myFunction({ country: "Sweden", continent: "Europe" });

// Alt Solution
function myFunction2(obj) {
  return obj.country;
}
