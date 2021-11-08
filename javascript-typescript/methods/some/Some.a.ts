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

const isSomeOneUnsuccesfull: boolean = studentsWithMark.some(
  // Determines whether the specified callback function returns true for any element of an array.
  (student) => student.mark < 50
);

console.log("isSomeOneUnsuccesfull", isSomeOneUnsuccesfull); // output -> true
