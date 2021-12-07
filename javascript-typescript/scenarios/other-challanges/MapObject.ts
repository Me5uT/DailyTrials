const employees = {
  hakan: { salary: 39, age: 40 },
  soner: { salary: 29, age: 30 },
  akif: { salary: 19, age: 20 },
  saltuk: { salary: 19, age: 30 },
  baran: { salary: 49, age: 20 },
};

const mapped = Object.entries(employees)
  .map(([key, value]) => [
    key,
    {
      seyHello: `My name is ${key}`,
      saySalary: `Salary: ${value.salary}`,
      sayAge: `I'm ${value.age} years old.`,
    },
  ])
  .reduce((result, [k, v]) => ({ ...result, [`${k}`]: v }), {});

console.log("sorted", mapped);
