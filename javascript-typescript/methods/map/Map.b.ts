interface IStudent {
  mark: number;
  name: string;
}

const studentsWithMark: IStudent[] = [
  { mark: 80, name: "John" },
  { mark: 70, name: "Joe" },
  { mark: 60, name: "Marry" },
  { mark: 10, name: "Biden" },
  { mark: 90, name: "Trump" },
];

const noteCard = studentsWithMark.map((student) =>
  console.log(`${student.name}'s mark is ${student.mark}`)
);

// output ->
// John's mark is 80
// Joe's mark is 70
// Marry's mark is 60
// Biden's mark is 10
// Trump's mark is 90
