interface IStockModel {
  name: string;
  price: number;
}

let stocks: IStockModel[] = [
  {
    name: "Apple",
    price: 321.85,
  },
  {
    name: "Tesla",
    price: 2471.04,
  },
  {
    name: "Disney",
    price: 118.77,
  },
  {
    name: "Google",
    price: 1434.87,
  },
  {
    name: "Netflix",
    price: 425.92,
  },
];

stocks.filter((stock) => stock.price < 1000);
// [
//     { name: 'Apple', price: 321.85 },
//     { name: 'Disney', price: 118.77 },
//     { name: 'Netflix', price: 425.92 }
//   ]
stocks.map((stock) => [stock.name, stock.price]);
// [
//     [ 'Apple', 321.85 ],
//     [ 'Tesla', 2471.04 ],
//     [ 'Disney', 118.77 ],
//     [ 'Google', 1434.87 ],
//     [ 'Netflix', 425.92 ]
//   ]

stocks.find((stock) => stock.name === "Tesla"); // { name: 'Tesla', price: 2471.04 }
stocks.some((stock) => stock.price < 1000); // true
stocks.some((stock) => stock.price < 10); // false
stocks.every((stock) => stock.price < 1000); // false
stocks.every((stock) => stock.price < 3000); // true
stocks.forEach((stock) => console.log(stock.name));
stocks.reduce((total, stock) => total + stock.price, 0); // 4772.45
let names = stocks.reduce((names, stock) => [...names, stock.name], []);
// [ 'Apple', 'Tesla', 'Disney', 'Google', 'Netflix' ]

console.log(names);
names.includes("Apple"); // true
names.indexOf("Tesla"); // 1
names[names.indexOf("Tesla")]; // "Tesla"
names.sort();
// [ 'Apple', 'Disney', 'Google', 'Netflix', 'Tesla' ]

names.slice(3); // [ 'Netflix', 'Tesla' ]
names.join(" - "); // 'Apple - Disney - Google - Netflix - Tesla'
names.toString(); // 'Apple,Disney,Google,Netflix,Tesla'
