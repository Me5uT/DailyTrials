function getLetter(s: string): string {
  let letter: string;

  switch (true) {
    case "aeiou".includes(s.charAt(0)):
      letter = "A";
      break;
    case "bcdfg".includes(s.charAt(0)):
      letter = "B";
      break;
    case "hjklm".includes(s.charAt(0)):
      letter = "C";
      break;
    case "npqrstvwxyz".includes(s.charAt(0)):
      letter = "D";
      break;
    default:
      letter = "Undefined Value";
      break;
  }
  console.log("letter", letter);

  return letter;
}

getLetter("ndfgt");
