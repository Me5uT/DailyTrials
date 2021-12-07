const employees = {
  hakan: { salar: 39, age: 40 },
  soner: { salar: 29, age: 30 },
  akif: { salar: 19, age: 20 },
  saltuk: { salar: 19, age: 30 },
  baran: { salar: 49, age: 20 },
};

const sorted = Object.entries(employees)
  .sort(([keyA, valueA], [keyB, valueB]) => valueA.age - valueB.age)
  .reduce((result, [k, v]) => ({ ...result, [k]: v }), {});

console.log("sorted", sorted);
//  {
//     akif: { salar: 19, age: 20 },
//     baran: { salar: 49, age: 20 },
//     soner: { salar: 29, age: 30 },
//     saltuk: { salar: 19, age: 30 },
//     hakan: { salar: 39, age: 40 }
//   }
