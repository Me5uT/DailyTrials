function getArea(length: number, width: number): number {
  let area = length * width;

  return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length: number, width: number): number {
  // Write your code here
  let perimeter = 2 * (length + width);

  return perimeter;
}
