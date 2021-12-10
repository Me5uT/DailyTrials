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

carsWithPrice.forEach((car: ICarModel) => {
  console.log(`${car.brand} marka aracın fiyatı ${car.price} TL'dır.`);
});

// output
// Opel marka aracın fiyatı 150000 TL'dır.
// Hundai marka aracın fiyatı 200000 TL'dır.
// Mercedes marka aracın fiyatı 300000 TL'dır.
// Reanult marka aracın fiyatı 250000 TL'dır.
