// hayvanlar classı ortak özellikler isim, kilo, yaş,cinsiyet köpek classı balık classı kuş classı

enum Gender {
  Male = "Male",
  Female = "Female",
}

abstract class Animal {
  protected weight: number;
  protected age: number;
  protected gender: Gender;

  constructor(weight: number, age: number, gender: Gender) {
    this.weight = weight;
    this.age = age;
    this.gender = gender;
  }

  getAge = (): number => {
    return this.age;
  };

  setAge = (age: number): void => {
    this.age = age;
  };

  getWeight = (): number => {
    return this.weight;
  };

  setWeight = (weight: number): void => {
    this.weight = weight;
  };

  getGender = (): Gender => {
    return this.gender;
  };

  setGender = (gender: Gender): void => {
    this.gender = gender;
  };

  abstract sayHi(): void;
}

class Dog extends Animal {
  private static names: string = "Karabaş";

  constructor(weight: number, age: number, gender: Gender) {
    super(weight, age, gender);
  }

  getName = (): string => {
    return Dog.names;
  };

  setName = (name: string): void => {
    Dog.names = name;
  };

  sayHi = (): void => {
    console.log(
      `Hi, Im ${this.getName()} and ${this.getAge()} years old. My gender is ${this.getGender()}.`
    );
  };

  woof = () => {
    console.log("Woof woof");
  };
}

class Bird extends Animal {
  private static names: string = "Papağan";

  constructor(weight: number, age: number, gender: Gender) {
    super(weight, age, gender);
  }

  getName = (): string => {
    return Bird.names;
  };

  setName = (name: string): void => {
    Bird.names = name;
  };

  fly = () => {
    console.log("Flyinggg");
  };

  sayHi = (): void => {
    console.log(
      `Hi, Im ${this.getName()} and ${this.getAge()} years old. My gender is ${this.getGender()}.`
    );
  };
}

const bird = new Bird(1, 4, Gender.Male);
bird.sayHi();
console.log(bird.getGender());
