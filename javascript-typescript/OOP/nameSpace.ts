var nameSpace = nameSpace || {};

nameSpace.myEmpConsepts = (function () {
  var empId: string = "00201"; //This is a private variable.
  this.empName = "Anil Singh"; //This is a public variable.

  //This is public function
  this.getEmp = function (): string {
    return "Anil Singh";
  };

  //This is private function
  var getEmp2 = function (): string {
    return "Anil Singh";
  };

  return {
    getEmp: this.getEmp, // work as public
    getEmp2: getEmp2, // work as public
  };
})();
