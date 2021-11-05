function getDayName(dateString: string): string {
  let dayName: string;
  // Write your code here
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  dayName = days[new Date(dateString).getDay()];
  return dayName;
}

console.log(getDayName("11/05/2021")); // output -> Friday
