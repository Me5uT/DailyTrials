import { NumberCollector } from "./NumberCollector";

export class Sorter {
  constructor(public collection: NumberCollector) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        // if collection is an array of numbers;

        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
