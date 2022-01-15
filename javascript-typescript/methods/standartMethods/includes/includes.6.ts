interface Per {
  name: string;
  age: number;
  gender: string;
}

const ahmet = {
  name: "Ahmet",
  age: 25,
  gender: "male",
};

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
    name: "Ayşe",
    age: 18,
    gender: "female",
  },
  {
    name: "Zeynep",
    age: 18,
    gender: "female",
  },
];

personArr.push(ahmet);
// Determines whether an array includes a certain element, returning true or false as appropriate.
const isAhmetInArray = personArr.includes({
  name: "Ahmet",
  age: 25,
  gender: "male",
});

console.log("isAhmetInArray", isAhmetInArray); // false

const isAhmetInArray2 = personArr.includes(ahmet);

console.log("isAhmetInArray2", isAhmetInArray2); // true because we pushed ahmet to personArr, it looks ref
