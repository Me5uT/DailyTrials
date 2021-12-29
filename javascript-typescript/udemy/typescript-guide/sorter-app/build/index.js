"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollector_1 = require("./NumberCollector");
var Sorter_1 = require("./Sorter");
var numbersCollection = new NumberCollector_1.NumberCollector([0, -6, 5, 1]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log("sorter.collection", sorter.collection);
