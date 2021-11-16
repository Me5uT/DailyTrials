class Difference {
  constructor(__elements: number[], n: number) {
    this.n = n;
    this.elements = __elements;
  }
  elements: number[];
  n: number;

  maximumDifference() {
    const sorted = this.elements.sort((a, b) => b - a);
    return sorted[0] - sorted[this.n - 1];
  }
}
