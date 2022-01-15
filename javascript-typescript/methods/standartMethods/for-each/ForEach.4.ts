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

personArr.forEach((per: Per) =>
  per.age > 20
    ? console.log(`${per.name} is not child`)
    : console.log(`${per.name} is child`)
);
