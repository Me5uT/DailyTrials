function getSecondLargest(nums: number[]) {
  return [...new Set(nums)].sort((a, b) => b - a)[1];
}

getSecondLargest([1, 4, 4, 9, 9, 5, 2]);
