import { CharactersCollection } from "./CharacterCollections";
import { NumberCollector } from "./NumberCollector";
import { Sorter } from "./Sorter";

const numbersCollection = new NumberCollector([0, -5, -10, 2, 99]);
numbersCollection.sort();
console.log("numbersCollection.data", numbersCollection.data);
