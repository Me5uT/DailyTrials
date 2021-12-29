import { NumberCollector } from "./NumberCollector";
import { Sorter } from "./Sorter";

const numbersCollection = new NumberCollector([0, -6, 5, 1]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log("sorter.collection", sorter.collection);
