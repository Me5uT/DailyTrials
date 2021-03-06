//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1: number, side2: number): number {
  return side1 + side2 - 1;
}

nextEdge(8, 10); // 17
nextEdge(5, 7); // 11
nextEdge(9, 2); // 10
