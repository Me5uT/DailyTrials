const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 10);
};

const arr: number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

let count: number = 0;

while (arr.some((a) => a == -1)) {
  count++;
  const randomNumber = getRandomNumber();
  if (randomNumber >= 0 && randomNumber < 10) arr[randomNumber] = randomNumber;
}

console.log(`Completed in ${count} turn. Result: ${arr}`);
