class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {}
}

const sorter = new Sorter([0, -5, 5, 1]);
sorter.sort();
console.log("sorter.collection", sorter.collection);
