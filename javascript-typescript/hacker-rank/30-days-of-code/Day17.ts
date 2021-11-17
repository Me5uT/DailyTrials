class Calculator {
  power(a, b) {
    if (a >= 0 && b >= 0) {
      return Math.pow(a, b);
    } else {
      return "n and p should be non-negative";
    }
  }
}
