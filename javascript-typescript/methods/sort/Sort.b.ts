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

const successRating = studentsWithMark.sort(
  // Sorts an array in place. This method mutates the array and returns a reference to the same array.
  (a: IStudent, b: IStudent) => b.mark - a.mark
);

console.log("successRating", successRating);
// output ->
// [
//   { mark: 90, name: "Trump" },
//   { mark: 80, name: "John" },
//   { mark: 70, name: "Joe" },
//   { mark: 60, name: "Marry" },
//   { mark: 10, name: "Biden" },
// ];

console.log("studentsWithMark", studentsWithMark);
// output ->
// [
//   { mark: 90, name: "Trump" },
//   { mark: 80, name: "John" },
//   { mark: 70, name: "Joe" },
//   { mark: 60, name: "Marry" },
//   { mark: 10, name: "Biden" },
// ];
