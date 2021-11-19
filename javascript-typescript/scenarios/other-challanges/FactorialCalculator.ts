const factorialCalculator = (num: number): number => {
  if (num >= 2) {
    let arr = [];
    let total = 1;

    for (let i = 0; i < num; i++) {
      arr[i] = i + 1;
    }

    arr.map((number: number) => {
      total *= number;
    });

    return total;
  } else if (num === 1) {
    return 1;
  } else {
    return 0;
  }
};

console.log("factorialCalculator", factorialCalculator(4));
