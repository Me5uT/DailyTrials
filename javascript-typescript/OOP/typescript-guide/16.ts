class Point {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Point2 {
  constructor(x: number, y: number);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    //
  }
}
