const today = (day: number) => {
  switch (day) {
    case 0:
      return "Pazar";
    case 1:
      return "Pazartesi";
    case 2:
      return "Salı";
    case 3:
      return "Çarşamba";
    case 4:
      return "Perşembe";
    case 5:
      return "Cuma";
    case 6:
      return "Cumartesi";

    default:
      break;
  }
};
const time = new Date().getDay();

console.log(today(time));
