function main(): void {
  const PI = Math.PI;
  // const r=readLine();

  const area: number = parseFloat(PI * r * r);
  console.log(area);

  const perimeter: number = parseFloat(2 * PI * r);
  console.log(perimeter);
  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}
