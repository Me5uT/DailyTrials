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

const isAllMale = personArr.every((person: Per) => person.gender == "male");
console.log("isAllMale", isAllMale); // true

const isAllBigger20 = personArr.every((person) => person.age > 20);
console.log("isAllBigger20", isAllBigger20); // false
