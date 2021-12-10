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

const canBuyACarInOneYear: boolean = carsWithPrice.some(
  (car) => car.price < 36000
);

console.log("canBuyACarInOneYear", canBuyACarInOneYear); // output always false in Turkey -- ilk eşleşmeyi bulduğunda true döner ve durur. Hiçbiri eşleşmezse false döner.
