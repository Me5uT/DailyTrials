// triangle , square ve circle  3 ayrı class ile alanlarının hesaplanması
abstract class Shape {
  side: number;
  names: string = "";

  constructor(side: number) {
    this.side = side;
  }

  abstract getPerimeter(): void;
}

class Triangle extends Shape {
  constructor(side: number) {
    super(side);
    this.names = "Triangle";
  }

  getPerimeter(): number {
    return this.side * 3;
  }
}

class Square extends Shape {
  constructor(side: number) {
    super(side);
    this.names = "Square";
  }

  getPerimeter(): number {
    return this.side * 4;
  }
}

class Circle extends Shape {
  constructor(side: number) {
    super(side);
    this.names = "Circle";
  }

  getPerimeter(): number {
    return Number((this.side * 2 * Math.PI).toFixed(2));
  }
}

function calculatePerimeter(obj: Shape): void {
  console.log(`Şekil: ${obj.names} Çevre Uzunluğu: ${obj.getPerimeter()}`);
}

const triangle = new Triangle(3);
calculatePerimeter(triangle);

const square = new Square(6);
calculatePerimeter(square);

const circle = new Circle(5);
calculatePerimeter(circle);
