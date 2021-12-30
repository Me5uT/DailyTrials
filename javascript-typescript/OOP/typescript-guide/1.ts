interface Person {
  fullName: string;
}

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleİnitial: string,
    public lastName: string
  ) {
    this.fullName = `${firstName} ${middleİnitial} ${lastName}`;
  }
}

function greeter(person: Person) {
  return `Hello ${person.fullName}!`;
}

const user = new Student("Jane", "M.", "June");
console.log(greeter(user));
