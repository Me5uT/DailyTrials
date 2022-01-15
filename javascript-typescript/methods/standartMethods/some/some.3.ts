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

const hasFemale = personArr.some((p) => p.gender == "female");
// Determines whether the specified callback function returns true for any element of an array.
