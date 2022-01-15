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

const girls = personArr.filter((per) => per.gender == "female");

console.log("girls", girls);

const boys = personArr.filter((per) => per.gender == "male");

console.log("boys", boys);
