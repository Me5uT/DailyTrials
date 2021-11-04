function getGrade(score: number): string {
  // Write your code here
  if (score > 25) {
    return "A";
  } else if (score > 20) {
    return "B";
  } else if (score > 15) {
    return "C";
  } else if (score > 10) {
    return "D";
  } else if (score > 5) {
    return "E";
  } else if (score <= 5 || score >= 0) {
    return "F";
  }
}

getGrade(6);

//
function getGrade2(score: number): string {
  // Write your code here
  return "FEDCBA"[parseInt(((score > 0 ? score - 1 : 0) / 5).toString())];
}

getGrade2(6);
