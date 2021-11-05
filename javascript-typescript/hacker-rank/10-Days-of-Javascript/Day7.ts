function regexVar(s: string): boolean {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */

  const re = "aeiou".includes(s[0]) && s[0] === s[s.length - 1];

  /*
   * Do not remove the return statement
   */
  return re;
}

console.log(regexVar("obcdo")); // false
