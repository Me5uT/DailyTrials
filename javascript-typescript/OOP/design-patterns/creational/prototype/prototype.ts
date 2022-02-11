class MyClass {
  numArr: number[];

  constructor(arr: number[]) {
    this.numArr = arr;
  }

  clone = () => {
    // return Object.assign({}, this); // same reference
    // return this; // same reference
    return JSON.parse(JSON.stringify(this)); // different reference
  };
}

const obje1 = new MyClass([1, 2, 3]);

console.log("obje1.numArr:", obje1.numArr);

const obje2 = obje1.clone();

console.log("obje2.numArr:", obje2.numArr);

obje2.numArr[0] = 0;

console.log("obje1.numArr:", obje1.numArr);
console.log("obje2.numArr:", obje2.numArr);

console.log("obje1.numArr === obje2.numArr", obje1.numArr === obje2.numArr);
