const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const joinedNums = nums.join("+");

console.log("joinedNums", joinedNums); // output -> 1+2+3+4+5+6+7+8+9

const totalNums = eval(joinedNums);

console.log("totalNums", totalNums); // 45
