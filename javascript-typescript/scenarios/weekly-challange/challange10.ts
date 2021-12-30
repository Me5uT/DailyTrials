// triangle , square ve circle  3 ayrı class ile alanlarının hesaplanması
class Base {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  calculate() {
    return 0;
  }
}
class Triangle extends Base {
  alan: number;
  constructor(public kenar1: number, public kenar2: number) {
    super("triangle");
    this.alan = (kenar1 * kenar2) / 2;
  }

  calculate() {
    return this.alan;
  }
}
class Square extends Base {
  alan: number;
  constructor(public kenar: number) {
    super("square");
    this.alan = kenar ** 2;
  }
  calculate() {
    return this.alan;
  }
}

class Circle extends Base {
  alan: number;
  constructor(public diameter: number) {
    super("circle");
    this.alan = Math.PI * diameter * diameter;
  }
  calculate() {
    return this.alan;
  }
}

function calculatePerimeter(obj: Base): void {
  console.log(`Şekil: ${obj.name} Alan: ${obj.calculate()}`);
}

const triangle = new Triangle(3, 5);
calculatePerimeter(triangle);

const circle = new Circle(5);
calculatePerimeter(circle);
