"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollector_1 = require("./NumberCollector");
var numbersCollection = new NumberCollector_1.NumberCollector([0, -5, -10, 2, 99]);
numbersCollection.sort();
console.log("numbersCollection.data", numbersCollection.data);
