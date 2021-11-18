// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

// My Solution
function myFunction(a: string, b: string): string {
  return a.includes(b) ? `${b}${a}` : `${a}${b}`;
}

myFunction("cheese", "cake");
myFunction("lips", "s");
myFunction("Java", "script");
myFunction(" think, therefore I am", "I");

// Alt Solution
function myFunction(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a;
}

myFunction2("cheese", "cake");
myFunction2("lips", "s");
myFunction2("Java", "script");
myFunction2(" think, therefore I am", "I");
