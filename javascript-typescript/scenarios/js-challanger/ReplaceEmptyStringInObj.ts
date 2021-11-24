// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// My Solution
function myFunction(obj: any): any {
  return Object.keys(obj).reduce((k, curr) => {
    let value = obj[curr].trim() === "" ? null : obj[curr];
    return { ...k, [curr]: value };
  }, {});
}

myFunction({ a: "a", b: "b", c: "" });
myFunction({ a: "", b: "b", c: " ", d: "d" });
myFunction({ a: "a", b: "b ", c: " ", d: "" });

// Alt Solution
function myFunction2(obj) {
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === "") newObj[key] = null;
  }
  return newObj;
}

// Alt Solution

function myFunction3(obj) {
  for (key in obj) {
    if (obj[key].trim() === "") obj[key] = null;
  }
  return obj;
}
