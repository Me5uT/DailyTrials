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

const finderUnSuccesfullStudent = studentsWithMark.find(
  (student) => student.mark < 50
);

console.log(`${finderUnSuccesfullStudent!.name} is unsuccesfull`); // output -> Biden is unsuccesfull -> returns first element
