// Write a function that takes a string and an object with two properties as arguments
// It should return the value of the property with key equal to the value of the string

// My Solution
function myFunction(a: any, b: string): string {
  return a[b];
}

myFunction({ continent: "Asia", country: "Japan" }, "continent");
myFunction({ country: "Sweden", continent: "Europe" }, "country");
