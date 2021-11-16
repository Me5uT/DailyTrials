class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here

  constructor(
    firstName: string,
    lastName: string,
    id: number,
    testScores: number[]
  ) {
    super(firstName, lastName, id);
    this.testScores = testScores;
  }

  testScores: number[];

  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  calculate() {
    let score = eval(this.testScores.join("+")) / this.testScores.length;
    if (score <= 100 && score >= 90) {
      return "O";
    } else if (score < 90 && score >= 80) {
      return "E";
    } else if (score < 80 && score >= 70) {
      return "A";
    } else if (score < 70 && score >= 55) {
      return "P";
    } else if (score < 55 && score >= 40) {
      return "D";
    } else {
      return "T";
    }
  }
}
