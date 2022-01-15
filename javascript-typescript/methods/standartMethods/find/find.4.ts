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

const ahmet = personArr.find((person) => person.name == "Ahmet");

console.log("ahmet", ahmet);

const ayse = personArr.find((person) => person.name == "Ayşe");

console.log("ayse", ayse);
