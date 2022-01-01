// triangle , square ve circle  3 ayrı class ile alanlarının hesaplanması
class Shape {
  name: string = "";
  perimeter: number = 0;
  getPerimeter(): number {
    return this.perimeter;
  }
}

class Triangle extends Shape {
  name: string = "Triangle";
  sideOne: number;

  // Eşkenar üçgen
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
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getPerimeter(): number {
    this.perimeter = this.radius * 2 * Math.PI;
    return Number(this.perimeter.toFixed(2));
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
