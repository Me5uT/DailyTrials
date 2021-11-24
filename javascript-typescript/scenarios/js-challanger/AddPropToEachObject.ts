// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

// My Solution
function myFunction(arr: any[], cont: string): any[] {
  return arr.map((obj) => {
    return { ...obj, continent: cont };
  });
}

myFunction(
  [
    { city: "Tokyo", country: "Japan" },
    { city: "Bangkok", country: "Thailand" },
  ],
  "Asia"
);
myFunction(
  [
    { city: "Stockholm", country: "Sweden" },
    { city: "Paris", country: "France" },
  ],
  "Europe"
);

// Alt Solution
function myFunction2(arr, str) {
  return arr.map((obj) => ({ ...obj, continent: str }));
}
