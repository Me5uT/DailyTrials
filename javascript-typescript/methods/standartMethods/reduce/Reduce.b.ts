const arr: string[] = ["m", "e", "s", "u", "t"];

const splittedString: string = arr.reduce(
  (total: string, curr: string) => (total += curr)
);

console.log("splittedString", splittedString); // output mesut
