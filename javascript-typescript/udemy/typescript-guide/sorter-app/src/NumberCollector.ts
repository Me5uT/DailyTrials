export class NumberCollector {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }
  setDate(date: number): number {
    return date;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number) {
    [this.data[leftIndex], this.data[rightIndex]] = [
      this.data[rightIndex],
      this.data[leftIndex],
    ];
  }
}
