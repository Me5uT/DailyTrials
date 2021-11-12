["a", "b"].concat(["c"]); // [ 'a', 'b', 'c' ]
["a", "b", "c"].join("-"); // 'a-b-c'
["a", "b", "c"].slice(1); // [ 'b', 'c' ]
["a", "b", "b"].indexOf("b"); // 1
["a", "b", "b"].lastIndexOf("b"); // 2
[1, 2, 3].map((z) => z * 2); // [ 2, 4, 6 ]
[1, 2, 3].reduce((x, y) => x * y); // 6
[1, 3, 2].sort(); // [ 1, 2, 3 ]
[1, 2, 3].reverse(); // [ 3, 2, 1 ]
[1, 2, 3].length; // 3
[1, 2, 3].every((x) => x < 4); // true
[1, 2, 3].some((x) => x < 2); // true
[1, 2, 3].filter((x) => x < 2); // [ 1 ]
[1, 2, 3].forEach((x) => console.log(x)); // 1 2 3

const arr = [1, 2, 3];
let x = arr.shift(); // arr=[2,3], x = 1
x = arr.unshift(5); // arr=[5,1,2,3], x=4
x = arr.pop(); // arr=[1,2], x=3
x = arr.push(7); // arr=[1,2,3,7], x=4
