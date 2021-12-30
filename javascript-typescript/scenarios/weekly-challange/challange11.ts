// Student class id , 5-6 nesne oluşturulacak , her instance da aynı id yi verecek.

class Student {
  private static staticId: number = 0;

  getId = (): number => {
    return Student.staticId;
  };

  setId = (id: number): void => {
    Student.staticId = id;
  };
}

const s1 = new Student();
s1.setId(7);
console.log(s1.getId()); // output 7

const s2 = new Student();
console.log(s2.getId()); // output 7

s2.setId(17);
console.log(s2.getId()); // output 17
