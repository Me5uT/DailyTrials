interface ICarModel {
  brand: string;
  price: number;
  priceWithTax?: number;
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

const tax = 1.5; //tax = %50

const carsWithTax: ICarModel[] = carsWithPrice.map(
  (carWithPrice: ICarModel) => {
    return {
      ...carWithPrice,
      priceWithTax: carWithPrice.price * tax,
    };
  }
);

console.log("carsWithTax", carsWithTax);
// output
// { brand: 'Opel', price: 150000, priceWithTax: 225000 },
// { brand: 'Hundai', price: 200000, priceWithTax: 300000 },
// { brand: 'Mercedes', price: 300000, priceWithTax: 450000 }
