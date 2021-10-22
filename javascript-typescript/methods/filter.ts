interface IPeople {
  name: string;
  age: number;
}

const people: IPeople[] = [
  {
    name: "Ahmet",
    age: 17,
  },
  {
    name: "Ayşe",
    age: 19,
  },
  {
    name: "Mehmet",
    age: 16,
  },
  {
    name: "Ali",
    age: 20,
  },
];

const adultPeople: IPeople[] = people.filter((human) => human.age > 18);

console.log("adultPeople", adultPeople); // output [ { name: 'Ayşe', age: 19 }, { name: 'Ali', age: 20 } ]
