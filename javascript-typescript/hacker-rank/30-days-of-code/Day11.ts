const array = [
  [1, 1, 1, 0, 0, 0],

  [0, 1, 0, 0, 0, 0],

  [1, 1, 1, 0, 0, 0],

  [0, 0, 2, 4, 4, 0],

  [0, 0, 0, 2, 0, 0],

  [0, 0, 1, 2, 4, 0],
];

const main = (arr) => {
  let highestSum = -63;
  let tempSum = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      tempSum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      if (tempSum > highestSum) {
        highestSum = tempSum;
      }
    }
  }
  console.log(highestSum);
};

main(array);
