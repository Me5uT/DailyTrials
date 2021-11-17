const randomNumber = (): number => Math.ceil(Math.random() * 10);
let numArr: number[] = [];
let a: number = 0;

while (true) {
  a++;
  numArr.push(randomNumber());
  numArr = [...new Set(numArr)];
  if (numArr.length === 10) break;
}
const sortedArr = numArr.sort((a, b) => a - b);

console.log(`Completed in ${a} turn. Result: ${sortedArr}`);
