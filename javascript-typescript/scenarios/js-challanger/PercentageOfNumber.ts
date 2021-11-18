// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

// My Solution
interface INumModel {
  number: number;
  percentage: number;
}

function myFunction(obj: INumModel): number {
  return (obj.number * obj.percentage) / 100;
}
myFunction({ number: 100, percentage: 50 });
myFunction({ number: 777, percentage: 2 });
myFunction({ number: 500, percentage: 99 });

// Alt Solution
function myFunction2({ number, percentage }) {
  return (number / 100) * percentage;
}
myFunction2({ number: 100, percentage: 50 });
myFunction2({ number: 777, percentage: 2 });
myFunction2({ number: 500, percentage: 99 });
