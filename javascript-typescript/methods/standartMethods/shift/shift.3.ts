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

const firstElem = personArr.shift();

// Removes the first element from an array and returns it.
// If the array is empty, undefined is returned and the array is not modified.
