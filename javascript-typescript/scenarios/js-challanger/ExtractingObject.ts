// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

// My Solution
function myFunction({ fn, ln, ...param }) {
  let result = { fn, ln };
  if (param.size != undefined) {
    result.size = `${param.size}cm`;
  }
  if (param.weight != undefined) {
    result.weight = `${param.weight}kg`;
  }
  return result;
}

myFunction({ fn: "Lisa", ln: "Müller", age: 17, size: 175, weight: 67 });
myFunction({
  fn: "Martin",
  ln: "Harper",
  age: 26,
  email: "martin.harper@test.de",
  weight: 102,
});
myFunction({ fn: "Andrew", ln: "Harper", age: 81, size: 175, weight: 71 });
myFunction({
  fn: "Matthew",
  ln: "Müller",
  age: 19,
  email: "matthew@mueller.de",
});

// ALt Solution
function myFunction2(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
}

// My Solution 2
function myFunction3({ fn, ln, size, weight }: any): any {
  return {
    fn,
    ln,
    ...(size && { size: `${size}cm` }),
    ...(weight && { weight: `${weight}kg` }),
  };
}
