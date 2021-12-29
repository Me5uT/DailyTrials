const carMakers: (number | string)[] = ["ford", "toyota", "chevy", 1];

const dates: Date[][] = [[new Date()], [new Date()]];

const carsByMake: ((string | number) | string[] | number[])[] = [
  ["f150"],
  ["corolla"],
  ["camaro"],
  [1],
  1,
  "1",
];

const myCar = carMakers[0];
// carMakers.push(true); Error
