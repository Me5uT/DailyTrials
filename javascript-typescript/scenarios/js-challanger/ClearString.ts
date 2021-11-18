// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

// My Solution
function myFunction(str1, str2) {
  const regex = /^[a-zA-Z]+$/i;
  const editedStr1 = str1
    .split("")
    .filter((e) => regex.test(e))
    .join("");
  const editedStr2 = str2
    .split("")
    .filter((e) => regex.test(e))
    .reverse()
    .join("");
  const concatedStr = `${editedStr1}${editedStr2}`;
  return `${concatedStr[0].toUpperCase()}${concatedStr.slice(1)}`;
}

myFunction("java", "tpi%rcs");
myFunction("c%ountry", "edis");
myFunction("down", "nw%ot");

// Alt Solution
function myFunction(a, b) {
  const first = a
    .split("")
    .map((part) => part.replace("%", ""))
    .join("");
  const second = b
    .split("")
    .reverse()
    .map((part) => part.replace("%", ""))
    .join("");
  return first.charAt(0).toUpperCase() + first.slice(1) + second;
}
