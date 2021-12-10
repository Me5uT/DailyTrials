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

const totalCLassMark = studentsWithMark
  .map((student) => student.mark) // output -> [ 80, 70, 60, 10, 90 ]
  .reduce((totalMark, mark) => totalMark + mark);

console.log("totalCLassMark", totalCLassMark); // output -> 310
