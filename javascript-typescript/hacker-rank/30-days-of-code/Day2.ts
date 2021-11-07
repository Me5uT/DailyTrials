function solve(
  meal_cost: number,
  tip_percent: number,
  tax_percent: number
): void {
  const total_cost: number = Math.round(
    meal_cost +
      (meal_cost * tip_percent) / 100 +
      (meal_cost * tax_percent) / 100
  );
  console.log(total_cost);
}

solve(12.0, 20, 8);
