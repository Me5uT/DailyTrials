const greeting = (isNight: boolean): string => {
  return isNight ? "Good Night" : "Good Day";
};

console.log(greeting(false)); // output Good Day
