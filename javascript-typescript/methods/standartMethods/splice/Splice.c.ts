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

const unsuccessfullStudentIndex = studentsWithMark.findIndex(
  (student) => student.mark < 50
);

console.log("unsuccessfullStudentIndex", unsuccessfullStudentIndex);

const spliceUnsuccesfullStudent = studentsWithMark.splice(
  unsuccessfullStudentIndex,
  1
); // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log("spliceUnsuccesfullStudent", spliceUnsuccesfullStudent); // output -> [ { mark: 10, name: 'Biden' } ]

console.log("studentsWithMark", studentsWithMark);
// output ->
// [
//     { mark: 80, name: 'John' },
//     { mark: 70, name: 'Joe' },
//     { mark: 60, name: 'Marry' },
//     { mark: 90, name: 'Trump' }
// ]
