// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// My Solution
function myFunction(a: any): any {
  return Object.keys(a).reduce((obj, key) => ((obj[a[key]] = key), obj), {});
}

myFunction({ bear: "animal", sow: "female", boar: "male", cub: "young" });
myFunction({ sheep: "animal", ewe: "female", ram: "male", lamb: "young" });
myFunction({ Berlin: "city", Germany: "country" });

// Alt Solution

function myFunction2(obj) {
  return Object.keys(obj).reduce((acc, cur) => {
    return { ...acc, [obj[cur]]: cur };
  }, {});
}
