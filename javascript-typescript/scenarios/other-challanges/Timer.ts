const myNumber = "1923";

if (parseInt(myNumber, 10) === 1453) {
}

if (Number(myNumber) === 1453) {
}

const runTime = (cb: () => {}) => {
  const start = new Date();

  for (let i = 0; i < 100000000; i++) {
    cb();
  }

  const end = new Date();
  console.log(
    `Toplam süre: ${end.getMilliseconds() - start.getMilliseconds()} ms `
  );
};

const process1 = () => Number("1");
const process2 = () => parseInt("1");
const process3 = () => parseFloat("1");
const process4 = () => +"1";

runTime(process1); // 55-56 ms
runTime(process2); // 326-353 ms
runTime(process3); // 420-550 ms
runTime(process4); // 56-58
