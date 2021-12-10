interface IDog {
  name: string;
  age: number;
}

const dogs: IDog[] = [
  { name: "Rio", age: 2 },
  { name: "Mac", age: 3 },
  { name: "Bruno", age: 6 },
  { name: "Lucas", age: 12 },
  { name: "Furr", age: 7 },
  { name: "Blu", age: 8 },
];

const dogNames = dogs.map((dog: IDog) => dog.name);

console.log(dogNames);
