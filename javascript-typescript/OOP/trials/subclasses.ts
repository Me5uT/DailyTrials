class Book {
  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  title: string;
  author: String;
  year: number;

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

//Magazine Subclass
class Magazine extends Book {
  constructor(title: string, author: string, year: number, month: string) {
    super(title, author, year);
    this.month = month;
  }
  month: string;

  getSummary(m?: string) {
    return `${this.title} was written by ${this.author} in ${this.year} ${m}`;
  }
}

const mgz1 = new Magazine("Magazine One", "John Doe", 2019, "Jan");
console.log("mgz1", mgz1);
console.log("mgz1.getSummary()", mgz1.getSummary("July"));
