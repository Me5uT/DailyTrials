"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollector = void 0;
var NumberCollector = /** @class */ (function () {
    function NumberCollector(data) {
        this.data = data;
    }
    Object.defineProperty(NumberCollector.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumberCollector.prototype.setDate = function (date) {
        return date;
    };
    NumberCollector.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumberCollector.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        _a = [
            this.data[rightIndex],
            this.data[leftIndex],
        ], this.data[leftIndex] = _a[0], this.data[rightIndex] = _a[1];
    };
    return NumberCollector;
}());
exports.NumberCollector = NumberCollector;
