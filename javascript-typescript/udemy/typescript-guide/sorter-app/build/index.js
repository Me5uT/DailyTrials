"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () { };
    return Sorter;
}());
var sorter = new Sorter([0, -5, 5, 1]);
sorter.sort();
console.log("sorter.collection", sorter.collection);
