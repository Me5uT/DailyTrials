interface IStudentModel {
  name: string;
  class: string;
  mark: number;
}
const students: IStudentModel[] = [
  { name: "John Doe", class: "1.Year", mark: 70 },
  { name: "Marry Gleen", class: "2.Year", mark: 50 },
  { name: "Michael Smith", class: "1.Year", mark: 30 },
  { name: "Jennifer Toar", class: "4.Year", mark: 90 },
  { name: "Adam Cloak", class: "3.Year", mark: 45 },
  { name: "Gloe Lear", class: "2.Year", mark: 15 },
  { name: "Luis Martin", class: "3.Year", mark: 85 },
];

/* 
Write a function that takes student array. This function must write passing and remaining count with averages as expected.
Expected Result:
Passing Count: 4, Passing Average: 73.75
Remaining Count: 3, Remaining Average: 30
Sınıflarına göre kalanlar ve geçenlieri bul
*/

const passedStudents = (arr: IStudentModel[]) => {
  let passedStudentsArr = [];
  let averageMark = 0;
  let notPassedStudentsArr = [];
  let notPassedAverageMark = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].mark >= 50) {
      passedStudentsArr.push(arr[i]);
      averageMark += arr[i].mark;
    } else {
      notPassedStudentsArr.push(arr[i]);
      notPassedAverageMark += arr[i].mark;
    }
  }

  const passedCount = `Passing Count: ${
    passedStudentsArr.length
  }, Passing Average: ${averageMark / passedStudentsArr.length}`;

  console.log(passedCount);

  const notPassedCount = `Remaining Count: ${
    notPassedStudentsArr.length
  }, Remaining Average: ${notPassedAverageMark / notPassedStudentsArr.length}`;
  console.log(notPassedCount);
};

passedStudents(students);
