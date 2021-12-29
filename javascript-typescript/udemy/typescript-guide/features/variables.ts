const apples: number = 5;

const speed: string = "fast";

const hasName: boolean = true;

const nothingMuch: null = null;

const nothing: undefined = undefined;

const now: Date = new Date();

const colors: string[] = ["red", "blue", "green"];

const myNumbers: number[] = [1, 2, 3];

const truths: boolean[] = [true, false, true];

class Car {
  //
}

let car: Car = new Car();

const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{ "x":10, "y":20 }';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log("coordinates", coordinates);

//

let numbers = [-12, -3, 5];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

console.log("numberAboveZero", numberAboveZero);
