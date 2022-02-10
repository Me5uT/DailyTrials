class Book {
  constructor(
    public title: string,
    private author: string,
    public year: number
  ) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  revised: boolean = false;

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`;
  }

  revise(newYear: number) {
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore() {
    return "Barnes & Noble";
  }
}

const book1 = new Book("Book One", "jhon Doe", 2020);
const book2 = new Book("Book One", "jhon Doe", 2020);

console.log("book1", book1);
console.log("book1.getSummary()", book1.getSummary());
book1.revise(2021);
console.log("book1", book1);
console.log("Book.topBookStore()", Book.topBookStore());
console.log(book1 === book2);
