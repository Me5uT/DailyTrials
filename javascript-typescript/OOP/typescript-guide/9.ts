class Circle {
  kind: "circle";
  radius: number;
}

class Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius;
  } else {
    return shape.sideLength ** 2;
  }
}
