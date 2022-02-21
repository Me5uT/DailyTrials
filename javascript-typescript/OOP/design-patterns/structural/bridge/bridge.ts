interface IShape {
  draw(): void;
}

interface IShapeImplementor {
  drawImplementation(): void;
}

class CircleImplementer implements IShapeImplementor {
  drawImplementation(): void {
    console.log("    ******");
    console.log("  **      **");
    console.log(" *          *");
    console.log("*            *");
    console.log("*            *");
    console.log(" *          *");
    console.log("  **      **");
    console.log("    ******");
  }
}

class Circle implements IShape {
  private implementer: IShapeImplementor;
  constructor(implementer: IShapeImplementor) {
    this.implementer = implementer;
  }

  draw(): void {
    this.implementer.drawImplementation();
  }
}

class SquareImplementer implements IShapeImplementor {
  drawImplementation(): void {
    console.log("**************");
    console.log("*            *");
    console.log("*            *");
    console.log("*            *");
    console.log("*            *");
    console.log("*            *");
    console.log("*            *");
    console.log("**************");
  }
}

class Square implements IShape {
  private implementer: IShapeImplementor;

  constructor(implementer: IShapeImplementor) {
    this.implementer = implementer;
  }

  draw(): void {
    this.implementer.drawImplementation();
  }
}

const circle = new Circle(new CircleImplementer());
circle.draw();

const square = new Square(new SquareImplementer());
square.draw();
