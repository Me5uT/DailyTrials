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
    age: 18,
    gender: "male",
  },
];

const addNewELem = personArr.push({ name: "Ayse", age: 30, gender: "female" });
// Appends new elements to the end of an array, and returns the new length of the array.
