function modifyArray(nums: number[]) {
  return nums.map((num) => {
    return num % 2 === 0 ? num * 2 : num * 3;
  });
}
console.log(modifyArray([1, 2, 3, 4, 5]));
