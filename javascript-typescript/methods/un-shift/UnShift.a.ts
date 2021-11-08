const studentsArr: string[] = ["Ahmet", "Mehmet", "Ali", "Emin", "Furkan"];

const unShiftedArrLength = studentsArr.unshift("Mesut"); // Inserts new elements at the start of an array, and returns the new length of the array.

console.log("unShiftedArrLength", unShiftedArrLength); // 6

console.log("studentsArr", studentsArr); // output -> [ 'Mesut', 'Ahmet', 'Mehmet', 'Ali', 'Emin', 'Furkan' ]
