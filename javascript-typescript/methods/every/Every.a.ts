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

const studentsWithMark2: IStudent[] = [
  { mark: 80, name: "John" },
  { mark: 70, name: "Joe" },
  { mark: 60, name: "Marry" },
  { mark: 50, name: "Biden" },
  { mark: 90, name: "Trump" },
];

const isAllSuccesfull = (students: IStudent[]): boolean => {
  const succesCalculator = students.every(
    (student: IStudent) => student.mark >= 50
  );
  return succesCalculator;
};

console.log(isAllSuccesfull(studentsWithMark)); // output -> false
console.log(isAllSuccesfull(studentsWithMark2)); // output -> true
