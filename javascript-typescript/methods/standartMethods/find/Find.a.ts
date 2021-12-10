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

const cheapCar = carsWithPrice.find((car) => car.price < 250000);

console.log("cheapCar", cheapCar); // output { brand: 'Opel', price: 150000 } -- return first element
