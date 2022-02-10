abstract class Person {
  names: string;

  constructor(name: string) {
    this.names = name;
  }

  display = (): void => {
    console.log(this.names);
  };

  abstract find(name: string): Person;
}

class Employee extends Person {
  empCode: number;

  constructor(name: string, code: number) {
    super(name);
    this.empCode = code;
  }

  find(name: string): Person {
    console.log(`finding ${name}`);

    return new Employee(name, 24);
  }
}

const emp = new Employee("Mesut", 2);

emp.display(); // Mesut

emp.find("Caga"); // finding Caga
emp.display(); // Mesut
