interface IModel {
  name: string;
}

class First {
  public method = (): boolean => {
    return true;
  };
}

class Second {
  public method = (value: string): string => {
    return value;
  };
}

class Third {
  public method = (value: IModel): IModel => {
    return value;
  };
}

class Facade {
  firstClassMethod = (): boolean => {
    return new First().method();
  };

  secondClassMethod = (value: string): string => {
    return new Second().method(value);
  };

  thirdClassMethod = (value: IModel): IModel => {
    return new Third().method(value);
  };
}

console.log("new First().method()", new First().method());
console.log("new Second().method('Mesut')", new Second().method("Mesut"));

const facade = new Facade();
console.log("facade.firstClassMethod()", facade.firstClassMethod());
console.log(
  "facade.secondClassMethod('Mesut')",
  facade.secondClassMethod("Mesut")
);
