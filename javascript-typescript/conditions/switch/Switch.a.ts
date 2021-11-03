const calculator = (num1: number, operator: string, num2: number) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Undefined Operator";
  }
};

calculator(2, "+", 4);
