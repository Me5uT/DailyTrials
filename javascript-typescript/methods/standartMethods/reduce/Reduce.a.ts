const numbers = [1, 2, 3, 4, 5, 6];

// sayıların kareleri toplamı
const totalOfSquare = numbers.reduce(
  (total: number, num: number) => (total += num * num)
);
console.log("totalOfSquare", totalOfSquare); // output 91
