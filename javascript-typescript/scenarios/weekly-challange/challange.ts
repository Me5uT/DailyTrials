// arrayın içnde objeler , index : number ve name: string
// fonksiyon itemı alıp arrayde bir üste taşıyacak
// her işlemden sonra çıktı
interface IPerson {
  index: number;
  name: string;
}
const arr: IPerson[] = [
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

const moveUpPerson = (person: IPerson) => {
  const personForUp = arr.find((p) => p.index === person.index);
  const personForDown = arr.find((p) => p.index === personForUp!.index - 1);

  personForUp!.index = personForUp!.index - 1;
  personForDown!.index = personForDown!.index + 1;

  const sortedArr = arr.sort((a, b) => a.index - b.index);
  console.log("sortedArr", sortedArr);
};

// moveUpPerson({
//   index: 2,
//   name: "ahmet",
// });

const moveDownPerson = (person: IPerson) => {
  const personForDown = arr.find((p) => p.index === person.index);
  const personForUp = arr.find((p) => p.index === personForDown!.index + 1);

  personForDown!.index = personForDown!.index + 1;
  personForUp!.index = personForUp!.index - 1;

  const sortedArr = arr.sort((a, b) => a.index - b.index);
  console.log("sortedArr", sortedArr);
};

moveDownPerson({
  index: 3,
  name: "ali",
});
