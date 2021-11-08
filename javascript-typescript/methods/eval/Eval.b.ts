const calculator = (operation: string): number => {
  return eval(operation);
};

console.log(calculator("2/4")); // output -> 0.5
console.log(calculator("2*4")); // output -> 8
console.log(calculator("2x4")); // output -> SyntaxError: Invalid or unexpected token
