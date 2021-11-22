// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

// My Solution
function myFunction(arr: number[], value: number): number {
  return arr.filter((v: number) => v > value).reduce((acc, num) => acc + num);
}

myFunction([1, 2, 3, 4, 5, 6, 7], 2);
myFunction([-10, -11, -3, 1, -4], -3);
myFunction([78, 99, 100, 101, 401], 99);

// Alt Solution
function myFunction2(arr, num) {
  return arr.reduce((sum, cur) => {
    if (cur > num) return sum + cur;
    return sum;
  }, 0);
}
