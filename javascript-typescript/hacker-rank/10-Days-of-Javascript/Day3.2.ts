function reverseString(s: string): void {
  try {
    // Can be chained, but it damages readability
    console.log(s.split("").reverse().join(""));
  } catch (e: any) {
    console.log(e.message);
    console.log(s);
  }
}
reverseString("1234");
