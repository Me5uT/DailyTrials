const s = "Hello";
console.log(s.toLowerCase());
console.log(typeof s);

const s2 = new String("Hello");
console.log(s2.toLowerCase());
console.log(typeof s2);

const book1 = {
  title: "Book One",
  author: "Jhon Doe",
  year: "2021",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1.getSummary());

const book2 = {
  title: "Book One",
  author: "Jhon Doe",
  year: "2021",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(Object.values(book2));
console.log(Object.keys(book2));
