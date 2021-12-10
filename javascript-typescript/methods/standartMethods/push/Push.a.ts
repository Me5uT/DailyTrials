const studentsArr: string[] = ["Ahmet", "Mehmet", "Ali", "Emin", "Furkan"];

const pushedArr = studentsArr.push("Mesut"); // Appends new elements to the end of an array, and returns the new length of the array.

console.log("pushedArr", pushedArr); // output -> 6
console.log("studentsArr", studentsArr); // outpu -> [ 'Ahmet', 'Mehmet', 'Ali', 'Emin', 'Furkan', 'Mesut' ]
