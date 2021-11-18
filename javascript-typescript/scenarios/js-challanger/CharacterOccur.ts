// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

// My Solution
function myFunction(harf: string, cumle: string): number {
  return cumle
    .toLowerCase()
    .split("")
    .map((h) => h === harf)
    .filter((v) => v === true).length;
}

myFunction("m", "How many times does the character occur in this sentence?");
myFunction("h", "How many times does the character occur in this sentence?");
myFunction("?", "How many times does the character occur in this sentence?");
myFunction("z", "How many times does the character occur in this sentence?");

// ALt Solution
function myFunction2(char, string) {
  return string.toLowerCase().split(char).length - 1;
}

myFunction2("m", "How many times does the character occur in this sentence?");
myFunction2("h", "How many times does the character occur in this sentence?");
myFunction2("?", "How many times does the character occur in this sentence?");
myFunction2("z", "How many times does the character occur in this sentence?");
