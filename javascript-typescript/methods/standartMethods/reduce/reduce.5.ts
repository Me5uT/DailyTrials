interface Per {
  name: string;
  age: number;
  gender: string;
}

const personArr: Per[] = [
  {
    name: "Ahmet",
    age: 25,
    gender: "male",
  },
  {
    name: "Ali",
    age: 27,
    gender: "male",
  },
  {
    name: "Mehmet",
    age: 17,
    gender: "male",
  },
];

const averageAge =
  personArr.map((p) => p.age).reduce((prev, curr) => (prev += curr)) /
  personArr.length;

console.log(averageAge);
// Calls the specified callback function for all the elements in an array.
// The return value of the callback function is the accumulated result,
// and is provided as an argument in the next call to the callback function.
