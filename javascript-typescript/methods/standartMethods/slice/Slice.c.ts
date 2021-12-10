const studentsArr: string[] = ["Ahmet", "Mehmet", "Ali", "Emin", "Furkan"];

const slicedArr: string[] = studentsArr.slice(0, 1); // Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.
// For example, -2 refers to the second to last element of the array.

console.log("slicedArr", slicedArr); // output -> [ 'Ahmet' ]

console.log("studentsArr", studentsArr); // output -> [ 'Ahmet', 'Mehmet', 'Ali', 'Emin', 'Furkan' ]
