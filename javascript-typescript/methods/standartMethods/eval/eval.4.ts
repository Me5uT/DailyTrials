enum Operator {
  arti = "+",
  eksi = "-",
  carpi = "*",
  bol = "/",
}

const calculator = (num1: number, op: Operator, num2: number) => {
  const result = eval(`${num1}${op}${num2}`);

  return result;
};

console.log(calculator(5, Operator.carpi, 7)); // 35
console.log(calculator(35, Operator.bol, 7)); // 5
