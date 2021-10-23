const greeting = (time: number) => {
  if (time < 12) {
    return "Good Morning";
  } else {
    return "Good Day";
  }
};

console.log(greeting(15));
