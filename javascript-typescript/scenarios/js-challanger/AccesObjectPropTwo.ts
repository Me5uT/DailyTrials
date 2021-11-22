// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor

// My Solution
function myFunction(obj) {
  return obj["prop-2"];
}

myFunction({ one: 1, "prop-2": 2 });

myFunction({ "prop-2": "two", prop: "test" });

// Alt Solution
function myFunction2(obj) {
  return obj["prop-2"];
}
