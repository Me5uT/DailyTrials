class Rectangle {
  constructor(a: number, b: number) {
    this.length = a;
    this.width = b;
    this.area = a * b;
    this.perimeter = (a + b) * 2;
  }
  length: number;
  width: number;
  area: number;
  perimeter: number;
}

function calculate() {
  const rec = new Rectangle(5, 9);

  console.log(rec.length);
  console.log(rec.width);
  console.log(rec.area);
  console.log(rec.perimeter);
}
calculate();
