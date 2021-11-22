// Write a function that takes an object as argument
// It should return an object with all original object properties but the property with key 'country'

// My Solution
function myFunction(a: any): any {
  delete a["country"];
  return a;
}

myFunction({ continent: "Asia", country: "Japan", region: "Kansai" });
myFunction({ country: "Sweden", continent: "Europe", planet: "Earth" });
myFunction({
  city: "Sacramento",
  state: "California",
  country: "USA",
  continent: "North America",
});

// Alt Solution
function myFunction2(obj) {
  const { country, ...rest } = obj;
  return rest;
}
