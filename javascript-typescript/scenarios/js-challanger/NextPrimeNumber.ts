// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

function myFunction(num: number): number {
  const isPrime = (nums: number) => {
    for (let i = 2; i < nums; i++) if (nums % i === 0) return false;
    return nums > 1;
  };

  return isPrime(num) ? num : myFunction(num + 1);
}

myFunction(38);
myFunction(7);
myFunction(115);
myFunction(2000);

// ALt Solution
function myFunction2(input) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  let n = input;
  while (!isPrime(n)) n++;
  return n;
}
