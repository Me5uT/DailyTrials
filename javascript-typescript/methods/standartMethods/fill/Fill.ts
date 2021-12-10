const studentsArr: string[] = ["Ahmet", "Mehmet", "Ali", "Emin", "Furkan"];

// const filledArr = studentsArr.fill("Mesut"); // Changes all array elements from start to end index to a static value and returns the modified array

// console.log("filledArr", filledArr); // output -> [ 'Mesut', 'Mesut', 'Mesut', 'Mesut', 'Mesut' ]

console.log("studentsArr", studentsArr); // output -> [ 'Mesut', 'Mesut', 'Mesut', 'Mesut', 'Mesut' ]

const filledArr2 = studentsArr.fill("Mesut", 2, 4);

console.log("filledArr2", filledArr2); // output -> [ 'Ahmet', 'Mehmet', 'Mesut', 'Mesut', 'Furkan' ]
