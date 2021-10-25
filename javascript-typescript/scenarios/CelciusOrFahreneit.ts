const celciusToFahreneit = (celcius: number): number => celcius * (9 / 5) + 32;

const fahreneitToCelcius = (fahreneit: number): number =>
  (fahreneit - 32) * (5 / 9);

console.log("celciusToFahreneit", celciusToFahreneit(100)); // output 212

console.log("fahreneitToCelcius", fahreneitToCelcius(100)); // output 37.77777777777778
