interface IVehicle {
  name: string;
  year: number;
  broken: boolean;
}

interface IReportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle0 = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`
  Name: ${vehicle.name}
  Year: ${vehicle.year}
  Broken: ${vehicle.broken}

  `);
};

const logVehicle = (vehicle: IVehicle): void => {
  console.log(`
    Name: ${vehicle.name}
    Year: ${vehicle.year}
    Broken: ${vehicle.broken}
    `);
};

const printSummary = (item: IReportable): void => {
  console.log(`${item.summary()}`);
};

printVehicle0(oldCivic);
logVehicle(oldCivic);
printSummary(oldCivic);

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  },
};

printSummary(drink);
