// number array , 2 func , 1.si negatif ve pozitifleri dönecek
// 2.si arrayin içindeki max, min bulacak
// ES6 fonksiyonlarını ES6 olmadan yaz

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

const findPosAndNegNumber = (
  arr: number[],
  showPositive: boolean
): number[] => {
  if (showPositive) return arr.filter((num: number) => num > 0);
  else return arr.filter((num: number) => num < 0);
};

console.log(findPosAndNegNumber(ar, true));
console.log(findPosAndNegNumber(ar, false));

const findMinAndMax = (arr: number[]) => {
  let minNum = Number.MAX_VALUE;
  let maxNum = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (minNum > arr[i]) {
      minNum = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }

  return {
    min: minNum,
    max: maxNum,
  };
};
const minAndMaxResult = findMinAndMax(ar);

console.log(
  `Minimum sayı: ${minAndMaxResult.min} Maximum sayı: ${minAndMaxResult.max}`
);
