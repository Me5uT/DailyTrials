class Person {
  private age: number;
  private name: string;
  private job: string;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
    this.job = "";
  }

  getName = (): string => {
    return this.name;
  };

  getAge = (): number => {
    return this.age;
  };

  setJob = (job: string) => {
    this.job = job;
  };
}

class House {
  private address: string;
  private price: number;
  private residents: any[];

  constructor(address: string, price: number, residents: any[]) {
    this.address = address;
    this.price = price;
    this.residents = [...residents];
  }

  getAddress = (): string => {
    return this.address;
  };

  getPrice = (): number => {
    return this.price;
  };

  getResidents = (): any[] => {
    return this.residents;
  };

  addResident = (resident: any) => {
    this.residents.push(resident);
  };
}

class Programmer extends Person {
  private company: string;
  private salary: number;
  private language: string;

  constructor(obj: IProgrammerModel) {
    super(obj.name, obj.age);
    this.company = obj.company;
    this.salary = obj.salary;
    this.language = obj.language;
  }

  sayHi = () => {
    console.log(
      `Hello, I'm ${this.getName()} and ${this.getAge()} years old! I work for ${
        this.company
      }, earning ${this.salary} dollars and writing ${this.language}.`
    );
  };
}

const pedro = new Person("Pedro", 20);
const house = new House("çekmeköy", 200, ["ali", "ahmet", "ayşe"]);
house.addResident(pedro);
pedro.setJob("Developer");
console.log(house.getResidents());

interface IProgrammerModel {
  name: string;
  age: number;
  company: string;
  salary: number;
  language: string;
}

const Mesut: IProgrammerModel = {
  name: "Mesut",
  age: 32,
  company: "Twitter",
  salary: 100,
  language: "TypeScript",
};

const programmer = new Programmer(Mesut);
programmer.sayHi();
