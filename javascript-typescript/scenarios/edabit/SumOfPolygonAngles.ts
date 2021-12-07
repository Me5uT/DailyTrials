// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

function sumPolygon(n: number): number {
  return (n - 2) * 180;
}

sumPolygon(3); // 180

sumPolygon(4); // 360

sumPolygon(6); // 720
