const studentsArr: string[] = ["Ahmet", "Mehmet", "Ali", "Emin", "Furkan"];

const entriesed =
  studentsArr.entries() != undefined ? studentsArr.entries().next() : ""; // Returns an iterable of key, value pairs for every entry in the array

const entriesArr2 =
  studentsArr.entries() != undefined ? studentsArr.entries().return() : "";

const entriesArr3 =
  studentsArr.entries() != undefined ? studentsArr.entries().throw() : "";

console.log("entriesed", entriesed); // output -> { value: [ 0, 'Ahmet' ], done: false }
console.log("entriesArr", entriesArr2);
console.log("entriesArr", entriesArr3);
