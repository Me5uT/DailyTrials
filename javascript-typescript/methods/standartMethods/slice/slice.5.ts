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

const slicedSecondElem = personArr.slice(1, 2);

// Returns a copy of a section of an array.
// For both start and end, a negative index can be used to indicate an offset from the end of the array.
// For example, -2 refers to the second to last element of the array.
