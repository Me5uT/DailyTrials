function Book(title: string, author: string, year: number): void {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

const book1 = new Book("Book One", "Jhon Doe", 2002);
const book2 = new Book("Book Two", "Jhon Doe", 2012);

//console.log(book1.getSummary());
console.log(book2);
book2.revise(2005);
console.log(book2);
