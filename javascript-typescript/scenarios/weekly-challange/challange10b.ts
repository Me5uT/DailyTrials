// triangle , square ve circle  3 ayrı class ile alanlarının hesaplanması

abstract class Shape {
  abstract name: string;
  abstract perimeter: number;
  abstract getPerimeter(): number;
}

class Triangle extends Shape {
  name: string = "Triagle";
  perimeter: number;
  sideOne: number;
  constructor(sideOne: number) {
    super();
    this.sideOne = sideOne;
  }

  getPerimeter(): number {
    this.perimeter = this.sideOne * 3;

    return this.perimeter;
  }
}

class Square extends Shape {
  name: string = "Square";
  perimeter: number;
  sideOne: number;
  constructor(sideOne: number) {
    super();
    this.sideOne = sideOne;
  }

  getPerimeter(): number {
    this.perimeter = this.sideOne * 4;

    return this.perimeter;
  }
}

class Circle extends Shape {
  name: string = "Circle";
  perimeter: number;
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getPerimeter(): number {
    this.perimeter = 2 * this.radius * Math.PI;

    return this.perimeter;
  }
}

function calculatePerimeter(obj: Shape): void {
  console.log(`Şekil: ${obj.name} Çevre Uzunluğu: ${obj.getPerimeter()}`);
}

const triangle = new Triangle(3);
calculatePerimeter(triangle);

const square = new Square(6);
calculatePerimeter(square);

const circle = new Circle(5);
calculatePerimeter(circle);
