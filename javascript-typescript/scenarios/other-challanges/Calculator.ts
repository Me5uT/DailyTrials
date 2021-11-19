enum Operator {
  arti = "+",
  eksi = "-",
  carpi = "*",
  bol = "/",
}

const calculator = (...args) => {
  return eval([...args].join(""));
};

calculator(2, Operator.eksi, 4);
