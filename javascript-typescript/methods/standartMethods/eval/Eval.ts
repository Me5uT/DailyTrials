enum Operator {
  arti = "+",
  eksi = "-",
  carpi = "*",
  bol = "/",
}

const calculator = (num1: number, operator: Operator, num2: number) => {
  return eval(num1 + operator + num2);
};

calculator(2, Operator.eksi, 4);
