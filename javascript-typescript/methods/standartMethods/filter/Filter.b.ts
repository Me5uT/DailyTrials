interface ICarModel {
  brand: string;
  price: number;
}
const carsWithPrice: ICarModel[] = [
  {
    brand: "Opel",
    price: 150000,
  },
  {
    brand: "Hundai",
    price: 200000,
  },
  {
    brand: "Mercedes",
    price: 300000,
  },
  {
    brand: "Reanult",
    price: 250000,
  },
];

const cheapCars: ICarModel[] = carsWithPrice.filter(
  (car) => car.price <= 200000
);

console.log("cheapCars", cheapCars); // output  [ { brand: 'Opel', price: 150000 }, { brand: 'Hundai', price: 200000 } ]

const expCars: ICarModel[] = carsWithPrice.filter((car) => car.price > 200000);

console.log("expCars", expCars); // output  [ { brand: 'Mercedes', price: 300000 }, { brand: 'Reanult', price: 250000 } ]
