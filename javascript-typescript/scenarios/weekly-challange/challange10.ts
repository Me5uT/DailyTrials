// triangle , square ve circle  3 ayrı class ile alanlarının hesaplanması
class Shape {
  public name: string = "";
  protected perimeter: number = 0;
  public getPerimeter(): number {
    return this.perimeter;
  }
}

class Triangle extends Shape {
  public name: string = "Triangle";
  private sideOne: number;

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
  public name: string = "Square";
  private sideOne: number;

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
  public name: string = "Circle";
  private radius: number;

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
