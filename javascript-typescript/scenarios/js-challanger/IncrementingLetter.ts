// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

// My Solution
function myFunction(str: string): string {
  const alphabetArray: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const findNextLetter = (harf: string): string => {
    if (harf === "z") {
      return "a";
    }
    let nextIndex: number = alphabetArray.findIndex((h) => h === harf) + 1;
    return alphabetArray[nextIndex];
  };

  return str
    .split("")
    .map((letter: string) => findNextLetter(letter))
    .join("");
}

myFunction("bnchmf");
myFunction("bgddrd");
myFunction("sdrshmf");

// ALt Solution
function myFunction(str) {
  const arr = [...str];
  const correctedArray = arr.map((e) =>
    String.fromCharCode(e.charCodeAt() + 1)
  );
  return correctedArray.join("");
}
