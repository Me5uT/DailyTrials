const studentsArr: string[] = ["Ahmet", "Mehmet", "Ali", "Emin", "Furkan"];

const shiftedElement = studentsArr.shift(); // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log("shiftedElement", shiftedElement); // output -> Ahmet

console.log("studentsArr", studentsArr); // output -> [ 'Mehmet', 'Ali', 'Emin', 'Furkan' ]
