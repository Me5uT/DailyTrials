function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

const parsed = map(["2", "4", "1", "3"], (n) => parseInt(n));

console.log(parsed);
