// My Solution
function myFunction2(arr: any[]): boolean {
  return arr.every((e, i) => e === arr[0]);
}

//myFunction2(['10', 10, 10, 10]);
myFunction2(["test", "test", "test"]);

// Alt Solution
function myFunction(input) {
  return new Set(input).size === 1;
}

//myFunction(['10', 10, 10, 10]);
myFunction(["test", "test", "test"]);
