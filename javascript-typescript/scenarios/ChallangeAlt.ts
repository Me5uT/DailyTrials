interface IPerson {
  index: number;
  name: string;
}
const personArr: IPerson[] = [
  {
    index: 1,
    name: "mesut",
  },
  {
    index: 2,
    name: "ahmet",
  },
  {
    index: 3,
    name: "ali",
  },
  {
    index: 4,
    name: "ayşe",
  },
];

const movePersonByIndex = (selectedPersonIndex: number, movedIndex: number) => {
  // find persons
  const matchedFirstPerson = personArr.find(
    (person: IPerson) => person!.index === selectedPersonIndex
  );
  const matchedSecondPerson = personArr.find(
    (person: IPerson) => person!.index === movedIndex
  );

  // change name
  [matchedFirstPerson!.name, matchedSecondPerson!.name] = [
    matchedSecondPerson!.name,
    matchedFirstPerson!.name,
  ];

  console.log(personArr);
};

movePersonByIndex(3, 4); // move second person to fourth index -- 2 to 4
