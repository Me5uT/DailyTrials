interface IStudent {
  mark: number;
  name: string;
}

const studentsWithMark: IStudent[] = [
  { mark: 80, name: "John" },
  { mark: 70, name: "Joe" },
  { mark: 20, name: "Marry" },
  { mark: 10, name: "Biden" },
  { mark: 90, name: "Trump" },
];

const whoIsUnSuccessful = (students: IStudent[]): void => {
  const findUnSuccesfullStudents = students.filter(
    (student: IStudent) => student.mark < 50
  );
  console.log(findUnSuccesfullStudents); // output -> [ { mark: 20, name: 'Marry' }, { mark: 10, name: 'Biden' } ]
};

whoIsUnSuccessful(studentsWithMark);
