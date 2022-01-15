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

const addedGreeting = personArr.map((p: Per) => {
  return {
    ...p,
    greeting: `${p.name} is ${p.age} years old and ${p.gender}`,
  };
});

console.log(addedGreeting);
