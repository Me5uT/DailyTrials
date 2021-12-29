const colors: string[] = ["red", "black", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log("colors[i]", colors[i]);
}

colors.forEach((color) => console.log("color", color));

//

const numbers: number[] = [1, 2, 3, 4, 5];
let sum: number = 0;
let sum2: number = 0;

numbers.forEach((number: number) => (sum += number));
console.log("sum", sum);

function adder(num: number) {
  sum2 += num;
}

numbers.forEach(adder);
console.log("sum2", sum2);

//

function handlePosts() {
  var posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" },
  ];

  function savePost(post) {
    console.log("Post saved!");
  }

  for (var i = 0; i < posts.length; i++) {
    savePost(posts[i]);
  }
  posts.forEach((post) => savePost(post));
}

//
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];
var areas = [];

images.forEach((image) => areas.push(image.height * image.width));
console.log(areas);
