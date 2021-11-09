function factorial(n: number): number {
  // Write your code here
  return n >= 2 && n <= 12 ? n * factorial(n - 1) : 1;
}

factorial(5);
