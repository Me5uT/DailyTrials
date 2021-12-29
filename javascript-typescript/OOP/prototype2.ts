var employee = function () {
  //This is a constructor function.
};

//Crate the instance of above constructor function and assign in a variable
var empInstance = new employee();
empInstance.deportment = "IT";

console.log(empInstance.deportment); //The output of above is IT.

//The example with prototype as given below-
var employee = function () {
  //This is a constructor  function.
};

employee.prototype.deportment = "IT"; //Now, for every instance employee will have a department.

//Crate the instance of above constructor functions and assign in a variable
var empInstance = new employee();
empInstance.deportment = "HR";

console.log(empInstance.deportment); //The output of above is IT not HR
