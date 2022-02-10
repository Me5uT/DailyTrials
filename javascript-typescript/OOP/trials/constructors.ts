function Book(title: string, author: string, year: number): void {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

const book1 = new Book("Book One", "Jhon Doe", 2021);
const book2 = new Book("Book Two", "Jhon Doe", 2022);

console.log(book1.getSummary());
