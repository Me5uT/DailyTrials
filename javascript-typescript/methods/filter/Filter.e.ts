const arr: any[] = ["asd", null, undefined, 12, ""];

const filteredArr = arr.filter(Boolean);
console.log("filteredArr", filteredArr); // [ 'asd', 12 ]

const neighbours = [
  {
    name: "ahmet",
    job: "engineer",
  },
  {
    name: "mehmet",
    job: null,
  },
  {
    name: "ali",
    job: undefined,
  },
  {
    name: "ayşe",
    job: "",
  },
];

const neighbourJobs = neighbours.filter((person) => person.job);
console.log("neighbourJobs", neighbourJobs); //  [ { name: 'ahmet', job: 'engineer' } ]
