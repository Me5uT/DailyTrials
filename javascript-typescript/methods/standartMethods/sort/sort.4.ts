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

const sortByAge = personArr.sort((a, b) => a.age - b.age);

// Sorts an array in place. This method mutates the array and returns a reference to the same array.
