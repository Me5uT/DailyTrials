// Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'

// My Solution
function myFunction(first: any, second: any): any {
  second["city"] = second["country"];
  second["country"] = first["country"];

  return { ...first, ...second };
}

myFunction(
  { continent: "Europe", country: "Germany" },
  { planet: "Earth", country: "Munich", state: "Bavaria" }
);

myFunction(
  { continent: "North America", country: "USA" },
  { planet: "Earth", country: "Los Angeles", state: "California" }
);

// Alt Solution
function myFunction2(first, second) {
  const { country, ...rest } = second;
  return { ...first, ...rest, city: country };
}
