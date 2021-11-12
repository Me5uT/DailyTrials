const nums: number[] = [2, 2, 4, 5, 5, 6, 6, 7, 7, 7, 9];

const counts = nums.reduce((acc, num: number) => {
  acc[num] = acc[num] ? acc[num] + 1 : 1;
  return acc;
}, {});

console.log(counts); // output -> { '2': 2, '4': 1, '5': 2, '6': 2, '7': 3, '9': 1 }
